import Block from '@/core/Block';
import { template } from './index.tmpl';

interface MessageInputProps {
  input_type?: string;
  input_id?: string;
  input_placeholder?: string;
  input_name: string;
  required?: string;
}

export class MessageInput extends Block<MessageInputProps> {
  constructor(props: MessageInputProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
