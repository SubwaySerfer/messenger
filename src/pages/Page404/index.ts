import Block from '@/core/Block';
import { template } from './page404.tmpl';
// import { ButtonLink } from '@/components/ButtonLink';

import { ErrorBlock } from '@/modules/ErrorBlock';

export class Page404 extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.ErrorBlock = new ErrorBlock({
      errorTitle: '404',
      errorDescription: 'Не туда попали',
    });
  }

  //   render() {
  //     return this.compile(template, this.props);
  //   }
  // }

  // import template from './index.hbs';
  // import Block from '@/core/Block';

  // interface ErrorBlockProps {
  //   errorTitle?: string;
  //   errorDescription?: string;
  // }

  // export class ErrorBlock extends Block<ErrorBlockProps> {
  //   constructor(props: ErrorBlockProps) {
  //     super(props);
  //   }

  // init() {
  //   this.children.ButtonLink = new ButtonLink({
  //     textLink: 'Назад к чатам',
  //     to: '/chats',
  //   });
  // }

  render() {
    return this.compile(template, this.props);
  }
}
