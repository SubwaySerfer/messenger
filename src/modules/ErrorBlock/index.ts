import template from './index.hbs';
import Block from '../utils/Block';

import { ButtonLink } from '../../components/ButtonLink';

interface ErrorBlockProps {
  errorTitle?: string;
  errorDescription?: string;
}

export class ErrorBlock extends Block<ErrorBlockProps> {
  constructor(props: ErrorBlockProps) {
    super(props);
  }

  init() {
    this.children.ButtonLink = new ButtonLink({
      textLink: 'Назад к чатам',
      to: '/messenger',
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
