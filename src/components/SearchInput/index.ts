import Block from '@/core/Block';
import { template } from './index.tmpl';

interface SearchInputProps {
  input_type?: string;
  input_id?: string;
  input_name?: string;
}

export class SearchInput extends Block {
  constructor(props: SearchInputProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
