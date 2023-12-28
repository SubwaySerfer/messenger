import Block from '@/core/Block';
import { template } from './index.tmpl';

import { ButtonLink, LineHelper } from '../../components';

export class EditorButtons extends Block {
  constructor(props: unknown) {
    super('div', props);
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
        to: '/',
      })),
      (this.children.LineHelper = new LineHelper({})),
      (this.children.LineHelper1 = new LineHelper({}));
  }

  render() {
    return this.compile(template, this.props);
  }
}
