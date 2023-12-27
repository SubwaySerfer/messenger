import Block from '@/core/Block';
import { template } from './index.tmpl';
import { ChatProfiles } from '..';

interface ChatBlockProps {
  chatsData: ChatProfiles;
}

export class ChatBlock extends Block<ChatBlockProps> {
  constructor(props: ChatBlockProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
