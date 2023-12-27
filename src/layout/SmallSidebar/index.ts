import { template } from './index.tmpl';
import Block from '@/core/Block';

interface SmallSidebarProps {
  arrowLink?: string;
}

export class SmallSidebar extends Block<SmallSidebarProps> {
  constructor(props: SmallSidebarProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
