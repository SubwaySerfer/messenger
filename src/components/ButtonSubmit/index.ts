import template from './index.hbs';
import Block from '../../core/Block';

interface ButtonSubmitProps {
  buttonTitle?: string;
  linkPath?: string;
  type?: string;
  imageBtn?: string;
  id?: string;
  class?: string;
  events?: {
    click: () => void;
  };
}
export class ButtonSubmit extends Block {
  constructor(props: ButtonSubmitProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
