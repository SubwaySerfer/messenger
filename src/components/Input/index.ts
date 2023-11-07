import Block from '../../modules/utils/Block';
import template from './index.hbs';

interface InputProps {
  input_type?: string;
  input_label?: string;
  input_id?: string;
  input_placeholder?: string;
  input_name?: string;
  required?: string;
  isValid?: string;
  input_min?: string;
  input_max?: string;
  input_error?: string;
}

export class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
