import Block from '../../../core/Block';
import template from './index.hbs';
import { MessageInput, ButtonSubmit } from '../../../components';

interface MessageFormProps {
  events?: { submit: (event: HTMLFormElement) => void };
}

export class MessageForm extends Block<MessageFormProps> {
  constructor(props: MessageFormProps) {
    super(props);
  }

  init() {
    (this._children.MessageInput = new MessageInput({
      input_type: 'text',
      input_id: 'message',
      input_name: 'message',
      input_placeholder: 'Сообщение',
      required: 'true',
    })),
      (this._children.MessageSendBtn = new ButtonSubmit({
        imageBtn: 'assets/icons/addFile.svg',
        type: 'submit',
        class: 'message-btn',
      }));
  }

  render() {
    return this.compile(template, this.props);
  }
}
