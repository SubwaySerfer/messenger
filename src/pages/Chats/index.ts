import { template } from './index.tmpl';
import { ChatSidebar } from '@/modules/ChatSidebar';

import { ChatField } from '../../components';
import Block from '@/core/Block';
// import { ChatProfiles } from '../../components';

// interface ChatsPageProps {
//   data: ChatProfiles;
//   messageField: boolean;
// }

export class ChatsPage extends Block {
  constructor() {
    super('', {});
  }

  init() {
    this.children.ChatSidebar = new ChatSidebar({
      data: this.props.data,
    });
    this.children.ChatField = new ChatField({
      messageField: this.props.messageField,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
