import template from './index.hbs';
import Block from '../../core/Block';

interface ButtonLinkProps {
  to?: string;
  textLink?: string;
  exitMode?: boolean;
  events?: {
    click: (e: Event) => void;
  };
}

export class ButtonLink extends Block {
  constructor(props: ButtonLinkProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
