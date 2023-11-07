import Block from '../../modules/utils/Block';
import template from './index.hbs';

interface InputProps {
  input_type?: string;
  input_label?: string;
  input_id?: string;
  input_placeholder?: string;
  input_name?: string;
  required?: boolean;
  isValid?: boolean;
  input_min?: number;
  input_max?: number;
  input_error?: string;
}
// export const Input = (props) => {
//   return Handlebars.compile(tmpl)(props)
// }

export class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
