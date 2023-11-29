import Block from '../../core/Block';
import template from './index.hbs';

import Router, { Routes } from '../../core/Router';
import { ButtonLink, LineHelper } from '../../components';

export class EditorButtons extends Block {
  constructor(props: unknown) {
    super(props);
  }

  init() {
    (this.children.ChangeData = new ButtonLink({
      textLink: 'Изменить данные',
      events: {
        click: () => {
          Router.go(Routes.ChangeData);
        },
      },
    })),
      (this.children.ChangePassword = new ButtonLink({
        textLink: 'Изменить пароль',
        events: {
          click: () => {
            Router.go(Routes.ChangePassword);
          },
        },
      })),
      (this.children.ExitButton = new ButtonLink({
        textLink: 'Выйти',
        exitMode: true,
        events: {
          click: () => {
            Router.go(Routes.LoginPage);
          },
        },
      })),
      (this.children.LineHelper = new LineHelper({})),
      (this.children.LineHelper1 = new LineHelper({}));
  }

  render() {
    return this.compile(template, this.props);
  }
}
