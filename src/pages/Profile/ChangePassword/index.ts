import Block from '@/core/Block';
import { template } from './index.tmpl';

import { SmallSidebar } from '../../../layout/SmallSidebar';
import { AvatarBlock } from '../../../modules/AvatarBlock';
import { PasswordData } from '../../../modules/EditorData/PasswordData';
import { onSubmitForm } from '@/modules/forms/form';

export class ChangePassword extends Block {
  constructor(props: unknown) {
    super('', props);
  }

  init() {
    (this.children.SmallSidebar = new SmallSidebar({ arrowLink: '/settings' })),
      (this.children.AvatarBlock = new AvatarBlock({
        nameProfile: 'Иван',
        avatar: 'assets/images/main-avatar.jpg',
        imageAlt: 'motorcycle helmet on the car roof.',
        showName: 'false',
      })),
      // (this.children.ButtonSubmit = new ButtonSubmit({
      //   buttonTitle: 'Сохранить',
      //   linkPath: '/settings',
      //   id: 'passwordForm',
      //   class: 'button-submit',
      //   type: 'submit',
      // }));
      (this.children.PasswordData = new PasswordData({
        formId: 'passwordForm',
        events: {
          submit: onSubmitForm,
        },
      }));
  }

  render() {
    return this.compile(template, this.props);
  }
}
