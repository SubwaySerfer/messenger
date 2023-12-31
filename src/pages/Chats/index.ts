import template from './index.hbs';
import { ChatSidebar } from '../../modules';

import { ChatField } from '../../components';
import Block from '../../modules/utils/Block';
import { ChatProfiles } from '../../components';

interface ChatsPageProps {
  data: ChatProfiles;
  messageField: boolean;
}

export class ChatsPage extends Block<ChatsPageProps> {
  constructor(props: ChatsPageProps) {
    super(props);
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
