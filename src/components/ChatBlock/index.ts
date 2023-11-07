import Block from '../../modules/utils/Block';
import template from './index.hbs';
import { ChatProfiles } from '..';

// import { chatsData } from '../../modules/ChatSidebar/chatsData';

// export const ChatBlock = ({ props }) => {
//   return Handlebars.compile(tmpl)({ chatsData, props });
// };

interface ChatBlockProps {
  chatsData: ChatProfiles;
}

export class ChatBlock extends Block<ChatBlockProps> {
  constructor(props: ChatBlockProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
