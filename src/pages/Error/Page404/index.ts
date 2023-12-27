import Block from '../../../core/Block';
import template from './index.hbs';

import { ErrorBlock } from '../../../modules/ErrorBlock';
import { routerApp, Routes } from '../../../core/Router';

export class Page404 extends Block {
  init() {
    this.children.ErrorBlock = new ErrorBlock({
      errorTitle: '404',
      errorDescription: 'Не туда попали',
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
