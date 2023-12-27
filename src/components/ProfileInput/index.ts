import { template } from './index.tmpl';
import Block from '@/core/Block';

interface ProfileInputProps {
  inputPlaceholder: string;
  input_name: string;
  inputLabel: string;
  id?: string;
  events?: {
    change?: () => void;
    focusout?: (event: HTMLFormElement) => void;
  };
}

export class ProfileInput extends Block<ProfileInputProps> {
  constructor(props: ProfileInputProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
