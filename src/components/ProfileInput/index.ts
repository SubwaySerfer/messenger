import template from './index.hbs';
import Block from '../../modules/utils/Block';

interface ProfileInputProps {
  inputPlaceholder: string;
  input_name: string;
  inputLabel: string;
  input_id?: string;
  events?: {
    change?: () => void;
    focusout?: (event: HTMLFormElement) => void;
  };
}

export class ProfileInput extends Block<ProfileInputProps> {
  constructor(props: ProfileInputProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
