import Block from '@/core/Block';
import { template } from './index.tmpl';

export class LineHelper extends Block {
  constructor(props: unknown) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
