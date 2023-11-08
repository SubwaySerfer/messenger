import Block from '../../../modules/utils/Block';
import template from './index.hbs';

import { ErrorBlock } from '../../../modules/ErrorBlock';

export class Page404 extends Block {
  constructor(props: unknown) {
    super(props);
  }

  init() {
    this.children.ErrorBlock = new ErrorBlock({
      errorTitle: '404',
      errorDescription: 'Не туда попали',
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
