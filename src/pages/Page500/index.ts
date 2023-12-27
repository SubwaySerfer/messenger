import Block from '@/core/Block';
import { template } from './index.tmpl';

import { ErrorBlock } from '@/modules/ErrorBlock';

export class Page500 extends Block {
  constructor(props: unknown) {
    super('div', props);
  }

  init() {
    this.children.ErrorBlock = new ErrorBlock({
      errorTitle: '500',
      errorDescription: 'Мы уже фиксим',
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
