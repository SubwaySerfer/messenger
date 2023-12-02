import template from './index.hbs';
import Block from '../../core/Block';

interface SmallSidebarProps {
  events?: {
    click: () => void;
  };
}

export class SmallSidebar extends Block<SmallSidebarProps> {
  constructor(props: SmallSidebarProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
