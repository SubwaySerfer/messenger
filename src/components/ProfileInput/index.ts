import template from './index.hbs';
import Block from '../../modules/utils/Block';

interface ProfileInputProps {
  inputName: string;
  inputPlaceholder: string;
  input_name: string;
}

export class ProfileInput extends Block<ProfileInputProps> {
  constructor(props: ProfileInputProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
