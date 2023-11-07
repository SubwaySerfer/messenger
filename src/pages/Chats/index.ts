import template from './index.hbs';
import { ChatSidebar } from '../../modules';
import { ChatField } from '../../components';
import Block from '../../modules/utils/Block';
import { ChatProfiles } from '../../components';

interface ChatsPageProps {
  chatsData: ChatProfiles;
}

export class ChatsPage extends Block<ChatsPageProps> {
  constructor(props: ChatsPageProps) {
    super(props);
  }

  init() {
    (this.children.ChatSidebar = new ChatSidebar({
      chatsData: this.props.chatsData,
    })),
      (this.children.ChatField = new ChatField({}));
  }

  render() {
    return this.compile(template, this.props);
  }
}
