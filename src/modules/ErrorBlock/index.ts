import template from './index.hbs';
import Block from '../../core/Block';

import { ButtonLink } from '../../components/ButtonLink';

interface ErrorBlockProps {
  errorTitle?: string;
  errorDescription?: string;
  events?: {
    click: (e: Event) => void;
  };
}

export class ErrorBlock extends Block<ErrorBlockProps> {
  constructor(props: ErrorBlockProps) {
    super(props);
  }

  init() {
    this._children.ButtonLink = new ButtonLink({
      textLink: 'Назад к чатам',
      class: 'button-link',
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
