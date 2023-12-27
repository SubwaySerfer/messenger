import { template } from './index.tmpl';
import Block from '@/core/Block';

import { ButtonLink } from '../../components/ButtonLink';

interface ErrorBlockProps {
  errorTitle?: string;
  errorDescription?: string;
}

export class ErrorBlock extends Block<ErrorBlockProps> {
  constructor(props: ErrorBlockProps) {
    super('div', props);
  }

  init() {
    this.children.ButtonLink = new ButtonLink({
      textLink: 'Назад к чатам',
      to: '/chats',
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
