import template from './index.hbs';
import Block from '../../modules/utils/Block';

interface ButtonSubmitProps {
  buttonTitle?: string;
  linkPath?: string;
}
export class ButtonSubmit extends Block {
  constructor(props: ButtonSubmitProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
