import template from './index.hbs';
import Block from '../utils/Block';

import { ChatBlock, ChatProfiles, SearchInput } from '../../components';
// import { ChatProfiles } from '../../components/types';
// import { SearchInput } from '../../components/SearchInput';
// import { ChatBlock } from '../../components/ChatBlock';
// import { ChatProfiles } from '../../components/types';

// export const ChatSidebar = () => {
//   return Handlebars.compile(tmpl)({
//     SearchInput: SearchInput({
//       input_name: 'search_input',
//       input_type: 'text'
//     }),
//     ChatBlock: ChatBlock({
//     })
//   })
// }
interface ChatSidebarProps {
  chatsData: ChatProfiles;
}

// interface ChatSidebarProps {
//   input_name: string;
//   input_type: string;
// }

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
        chatsData: this.props.chatsData,
      }));
  }

  render() {
    return this.compile(template, this.props);
  }
}
