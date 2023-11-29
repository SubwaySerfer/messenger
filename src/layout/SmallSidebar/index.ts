import template from './index.hbs';
import Block from '../../core/Block';

interface SmallSidebarProps {
  arrowLink?: string;
}

export class SmallSidebar extends Block<SmallSidebarProps> {
  constructor(props: SmallSidebarProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
