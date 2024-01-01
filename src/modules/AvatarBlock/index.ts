import Block from '@/core/Block';
import { template } from './index.tmpl';
import { HTTPTransport } from '@/core/HttpTransport';
import { ENDPOINTS } from '@/types/endpoints';
import { AvatarModal } from './AvatarModal/avatarModal';
import { onSubmitAvatar } from '@/modules/forms/form';

interface AvatarBlockProps {
  nameProfile?: string;
  imageUrl?: string;
  events?: {
    click: () => void;
  };
  isEditAvatar?: boolean;
}
export const setAvatar = (avatar: string | undefined) => ({
  imageUrl: HTTPTransport.API_URL + ENDPOINTS.resources + avatar || '',
});

export class AvatarBlock extends Block<AvatarBlockProps> {
  constructor(props: AvatarBlockProps) {
    super('div', {
      ...props,
      events: {
        click: () => {
          (this.children.AvatarModal as Block).setProps({
            isEditAvatar: true,
          });
        },
      },
    });
  }
  init() {
    this.children.AvatarModal = new AvatarModal({
      isEditAvatar: false,
      events: {
        submit: (e) => onSubmitAvatar(e, this.props.chatAvatar),
      },
    });
    if (window.location.pathname === '/settings') {
      console.log('faac');
    }
  }

  _addEvents() {
    const { events = {} } = this.props;
    Object.keys(events).forEach((eventName) => {
      this.element!.querySelector('.avatar-block__img')?.addEventListener(
        eventName,
        events[eventName]
      );
    });
  }

  _removeEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this.element!.querySelector('.avatar-block__img')?.removeEventListener(
        eventName,
        events[eventName]
      );
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
