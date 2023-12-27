import Block from '../../core/Block';
import template from './index.hbs';
import { AuthController } from '../../controller/AuthController';
import { routerApp, Routes } from '../../core/Router';
import { ButtonLink, LineHelper } from '../../components';

export class EditorButtons extends Block {
  constructor() {
    super({});
  }

  init() {
    (this.children.ChangeData = new ButtonLink({
      textLink: 'Изменить данные',
      class: 'button-link',
      events: {
        click: () => {
          routerApp.go(Routes.ChangeData);
        },
      },
    })),
      (this.children.ChangePassword = new ButtonLink({
        textLink: 'Изменить пароль',
        class: 'button-link',
        events: {
          click: () => {
            routerApp.go(Routes.ChangePassword);
          },
        },
      })),
      (this.children.ExitButton = new ButtonLink({
        textLink: 'Выйти',
        class: 'button-link',
        exitMode: true,
        events: {
          click: async () => {
            await AuthController.logout();
          },
        },
        // events: {
        //   click: () => {
        //     Router.go(Routes.login);
        //   },
        // },
      })),
      (this.children.LineHelper = new LineHelper({})),
      (this.children.LineHelper1 = new LineHelper({}));
  }

  render() {
    return this.compile(template, this.props);
  }
}
