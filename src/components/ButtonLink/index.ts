import { template } from './index.tmpl';
import Block from '@/core/Block';

interface ButtonLinkProps {
  to?: string;
  textLink?: string;
  exitMode?: boolean;
}

export class ButtonLink extends Block<ButtonLinkProps> {
  constructor(props: ButtonLinkProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
