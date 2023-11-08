import template from './index.hbs';
import Block from '../../modules/utils/Block';

import { MessageInput } from '..';

interface ChatFieldProps {
  messageField: boolean;
}
export class ChatField extends Block<ChatFieldProps> {
  //TODO: del any
  constructor(props: ChatFieldProps) {
    super(props);
  }

  init() {
    this.children.MessageInput = new MessageInput({
      input_type: 'text',
      input_id: 'message',
      input_name: 'message',
      input_placeholder: 'Сообщение',
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
