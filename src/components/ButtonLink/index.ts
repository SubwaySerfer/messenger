import template from './index.hbs';
import Block from '../../core/Block';

interface ButtonLinkProps {
  textLink?: string;
  exitMode?: boolean;
  class?: string;
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
