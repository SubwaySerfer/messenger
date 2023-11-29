import template from './index.hbs';
import Block from '../../core/Block';

import { ChatBlock, ChatProfiles, SearchInput } from '../../components';
interface ChatSidebarProps {
  data: ChatProfiles;
}

export class ChatSidebar extends Block<ChatSidebarProps> {
  constructor(props: ChatSidebarProps) {
    super(props);
  }

  init() {
    (this.children.SearchInput = new SearchInput({
      input_name: 'search_input',
      input_type: 'text',
    })),
      (this.children.ChatBlock = new ChatBlock({
        chatsData: this.props.data,
      }));
  }

  render() {
    return this.compile(template, this.props);
  }
}
