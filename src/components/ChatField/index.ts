import template from './index.hbs';
import Block from '../../modules/utils/Block';

export class ChatField extends Block {
  //TODO: del any
  constructor(props: any) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
