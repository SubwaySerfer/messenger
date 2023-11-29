import Block from '../../../core/Block';
import template from './index.hbs';

import { ErrorBlock } from '../../../modules/ErrorBlock';
import Router, { Routes } from '../../../core/Router';

export class Page404 extends Block {
  constructor(props: unknown) {
    super(props);
  }

  init() {
    this.children.ErrorBlock = new ErrorBlock({
      errorTitle: '404',
      errorDescription: 'Не туда попали',
      events: {
        click: () => {
          Router.go(Routes.ChatsPage);
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
