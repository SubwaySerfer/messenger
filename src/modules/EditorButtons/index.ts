import Block from '../utils/Block';
import template from './index.hbs';

import { ButtonLink, LineHelper } from '../../components';

export class EditorButtons extends Block {
  constructor(props: unknown) {
    super(props);
  }

  init() {
    (this.children.ChangeData = new ButtonLink({
      textLink: 'Изменить данные',
      to: '/profile-change-data',
    })),
      (this.children.ChangePassword = new ButtonLink({
        textLink: 'Изменить пароль',
        to: '/profile-change-password',
      })),
      (this.children.ExitButton = new ButtonLink({
        textLink: 'Выйти',
        exitMode: true,
        to: '/login',
      })),
      (this.children.LineHelper = new LineHelper({}));
  }

  render() {
    return this.compile(template, this.props);
  }
}
