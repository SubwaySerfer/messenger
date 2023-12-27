import Block from '../../../core/Block';
import template from './index.hbs';

import { ErrorBlock } from '../../../modules/ErrorBlock';
import { routerApp, Routes } from '../../../core/Router';

export class Page500 extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.ErrorBlock = new ErrorBlock({
      errorTitle: '500',
      errorDescription: 'Мы уже фиксим',
      events: {
        click: () => {
          routerApp.go(Routes.chats);
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
