import Block from '../../core/Block';
import template from './index.hbs';

import { AvatarBlock, EditorButtons } from '../../modules';

import { SmallSidebar } from '../../layout/SmallSidebar';
import { StaticData } from '../../modules/EditorData/StaticData';
import { routerApp, Routes } from '../../core/Router';
import { withUser } from '../../modules/EditorData/StaticData';

export class ProfilePage extends Block {
  constructor() {
    super({});
  }

  init() {
    (this._children.SmallSidebar = new SmallSidebar({
      events: {
        click: () => {
          routerApp.go(Routes.chats);
        },
      },
    })),
      (this._children.AvatarBlock = new AvatarBlock({
        nameProfile: 'Иван',
        avatar: 'assets/images/main-avatar.jpg',
        imageAlt: 'motorcycle helmet on the car roof.',
      })),
      (this._children.EditorData = new StaticData({})),
      (this._children.EditorButtons = new EditorButtons());
  }

  render() {
    return this.compile(template, this.props);
  }
}

export const Profile = withUser(ProfilePage);
