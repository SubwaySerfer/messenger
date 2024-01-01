import Block from '@/core/Block';
import { template } from './index.tmpl';

import { AvatarBlock } from '@/modules/AvatarBlock';
import { EditorButtons } from '@/modules/EditorButtons';
import { SmallSidebar } from '@/layout/SmallSidebar';
import { StaticData } from '@/modules/EditorData/StaticData';
import { setAvatar } from '@/modules/AvatarBlock';
import { store } from '@/core/Store';
export class Profile extends Block {
  constructor(props: unknown) {
    super('', props);
  }

  init() {
    const { user } = store.getState();
    console.log(user?.first_name);
    (this.children.SmallSidebar = new SmallSidebar({
      arrowLink: '/messenger',
    })),
      (this.children.AvatarBlock = new AvatarBlock({
        imageUrl: setAvatar(user?.avatar).imageUrl,
        nameProfile: user?.first_name,
      })),
      (this.children.EditorData = new StaticData({})),
      (this.children.EditorButtons = new EditorButtons({}));
  }

  render() {
    return this.compile(template, this.props);
  }
}
