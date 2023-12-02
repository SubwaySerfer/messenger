import Block from '../../core/Block';
import template from './index.hbs';

import { AvatarBlock, EditorButtons } from '../../modules';

import { SmallSidebar } from '../../layout/SmallSidebar';
import { StaticData } from '../../modules/EditorData/StaticData';

export class Profile extends Block {
  constructor() {
    super({});
  }

  init() {
    (this._children.SmallSidebar = new SmallSidebar({
      arrowLink: '/messenger',
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
