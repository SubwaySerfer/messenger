import Block from '../../core/Block';
import template from './index.hbs';
import { authController } from '../../controller/AuthController';
import { routerApp, Routes } from '../../core/Router';
import { ButtonLink, LineHelper } from '../../components';

export class EditorButtons extends Block {
  constructor() {
    super({});
  }

  init() {
    (this._children.ChangeData = new ButtonLink({
      textLink: 'Изменить данные',
      class: 'button-link',
      events: {
        click: () => {
          routerApp.go(Routes.ChangeData);
        },
      },
    })),
      (this._children.ChangePassword = new ButtonLink({
        textLink: 'Изменить пароль',
        class: 'button-link',
        events: {
          click: () => {
            routerApp.go(Routes.ChangePassword);
          },
        },
      })),
      (this._children.ExitButton = new ButtonLink({
        textLink: 'Выйти',
        class: 'button-link',
        exitMode: true,
        events: {
          click: async () => {
            await authController.logout();
          },
        },
        // events: {
        //   click: () => {
        //     Router.go(Routes.login);
        //   },
        // },
      })),
      (this._children.LineHelper = new LineHelper({})),
      (this._children.LineHelper1 = new LineHelper({}));
  }

  render() {
    return this.compile(template, this.props);
  }
}
