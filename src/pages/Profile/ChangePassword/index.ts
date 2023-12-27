import Block from '../../../core/Block';
import template from './index.hbs';
import { routerApp, Routes } from '../../../core/Router';
import { SmallSidebar } from '../../../layout/SmallSidebar';
import { AvatarBlock } from '../../../modules/AvatarBlock';
import { ButtonSubmit } from '../../../components/ButtonSubmit';
import { PasswordData } from '../../../modules/EditorData/PasswordData';

export class ChangePassword extends Block {
  constructor() {
    super({});
  }

  init() {
    (this.children.SmallSidebar = new SmallSidebar({
      events: {
        click: () => {
          routerApp.go(Routes.Profile);
        },
      },
    })),
      //TODO
      (this.children.AvatarBlock = new AvatarBlock({
        nameProfile: 'Иван',
        avatar: 'assets/images/main-avatar.jpg',
        imageAlt: 'motorcycle helmet on the car roof.',
        showName: 'false',
      })),
      (this.children.ButtonSubmit = new ButtonSubmit({
        buttonTitle: 'Сохранить',
        events: {
          click: () => {
            routerApp.go(Routes.Profile);
          },
        },
        // linkPath: '/settings',
        id: 'passwordForm',
        class: 'button-submit',
        type: 'submit',
      }));
    this.children.PasswordData = new PasswordData({
      formId: 'passwordForm',
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
