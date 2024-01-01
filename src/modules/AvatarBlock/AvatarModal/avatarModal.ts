import { avatarTemplate } from '../index.tmpl';
import Block from '@/core/Block';
// import { onSubmitAvatar } from '@/modules/forms/form';
import { ButtonSubmit } from '@/components';

type AvatarModalProps = {
  isEditAvatar?: boolean;
  events: {
    submit?: (e: SubmitEvent) => void;
  };
};

export class AvatarModal extends Block {
  constructor(props: AvatarModalProps) {
    super('div', {
      props,
      events: {
        click: (e: Event) => {
          if (e.target === e.currentTarget) {
            this.setProps({ isEditAvatar: false });
          }
        },
      },
    });
  }

  init() {
    console.log('modal window');
    this.children.buttonSubmit = new ButtonSubmit({
      buttonTitle: 'Сохранить',
      type: 'submit',
      id: 'imageForm',
      class: 'button-submit',
      // events: {
      //   submit: (e) => onSubmitAvatar(e, this.props.chatAvatar),
      // },
    });
  }

  showModal() {
    (this.getContent() as HTMLElement).classList.add('modal-show');
  }

  hideModal() {
    (this.getContent() as HTMLElement).classList.remove('modal-show');
  }

  render() {
    this.props.isEditAvatar ? this.showModal() : this.hideModal();
    return this.compile(avatarTemplate, this.props);
  }
}
