import { template } from './index.tmpl';
import Block from '@/core/Block';
import FormValidator from '../../utils/Validator';
import { MessageForm } from '../../pages/Chats/MessageForm';

interface ChatFieldProps {
  messageField: boolean;
  events?: { submit: (event: HTMLFormElement) => void };
}
export class ChatField extends Block<ChatFieldProps> {
  constructor(props: ChatFieldProps) {
    super('div', props);
  }

  init() {
    this.children.MessageForm = new MessageForm({
      events: {
        submit: (e) => {
          e.preventDefault();

          new FormValidator(this.element as HTMLElement).init();
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
