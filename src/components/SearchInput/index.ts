import Block from '../../modules/utils/Block';
import template from './index.hbs';

interface SearchInputProps {
  input_type?: string;
  input_id?: string;
  input_name?: string;
}

export class SearchInput extends Block {
  constructor(props: SearchInputProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
