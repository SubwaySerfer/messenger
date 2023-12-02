import template from './index.hbs';
import { ChatSidebar } from '../../modules';

import { ChatField } from '../../components';
import Block from '../../core/Block';
// import { ChatProfiles } from '../../components';

// interface ChatsPageProps {
//   data: ChatProfiles;
//   messageField: boolean;
// }

export class ChatsPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this._children.ChatSidebar = new ChatSidebar({
      data: this.props.data,
    });
    this._children.ChatField = new ChatField({
      messageField: this.props.messageField,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
