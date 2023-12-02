import Block from '../../core/Block';
import template from './index.hbs';

import { AvatarBlock, EditorButtons } from '../../modules';

import { SmallSidebar } from '../../layout/SmallSidebar';
import { StaticData } from '../../modules/EditorData/StaticData';
import Router, { Routes } from '../../core/Router';

export class Profile extends Block {
  constructor() {
    super({});
  }

  init() {
    (this._children.SmallSidebar = new SmallSidebar({
      events: {
        click: () => {
          Router.go(Routes.chats);
        },
      },
    })),
      (this._children.AvatarBlock = new AvatarBlock({
        nameProfile: 'Иван',
        avatar: 'assets/images/main-avatar.jpg',
        imageAlt: 'motorcycle helmet on the car roof.',
      })),
      (this._children.EditorData = new StaticData()),
      (this._children.EditorButtons = new EditorButtons());
  }

  render() {
    return this.compile(template, this.props);
  }
}
