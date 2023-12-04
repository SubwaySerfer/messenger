import template from './index.hbs';
import Block from '../../core/Block';
import { ButtonLink } from '../../components';

import { ChatBlock, ChatProfiles, SearchInput } from '../../components';
import { routerApp, Routes } from '../../core/Router';
interface ChatSidebarProps {
  data: ChatProfiles;
}

export class ChatSidebar extends Block<ChatSidebarProps> {
  constructor(props: ChatSidebarProps) {
    super(props);
  }

  init() {
    (this._children.SearchInput = new SearchInput({
      input_name: 'search_input',
      input_type: 'text',
    })),
      (this._children.ChatBlock = new ChatBlock({
        chatsData: this.props.data,
      }));
    this._children.ProfileLink = new ButtonLink({
      textLink: 'Профиль',
      class: 'button-link chat-sidebar__profile',
      events: {
        click: () => {
          routerApp.go(Routes.Profile);
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
