import Block from '../../core/Block';
import template from './index.hbs';

export class LineHelper extends Block {
  constructor(props: unknown) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
