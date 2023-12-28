import Block from '@/core/Block';
import { template } from './index.tmpl';

import { AvatarBlock } from '@/modules/AvatarBlock';
import { EditorButtons } from '@/modules/EditorButtons';
import { SmallSidebar } from '../../layout/SmallSidebar';
import { StaticData } from '../../modules/EditorData/StaticData';

export class Profile extends Block {
  constructor(props: unknown) {
    super('', props);
  }

  init() {
    (this.children.SmallSidebar = new SmallSidebar({
      arrowLink: '/messenger',
    })),
      (this.children.AvatarBlock = new AvatarBlock({
        nameProfile: 'Иван',
        avatar: 'assets/images/main-avatar.jpg',
        imageAlt: 'motorcycle helmet on the car roof.',
      })),
      (this.children.EditorData = new StaticData({})),
      (this.children.EditorButtons = new EditorButtons({}));
  }

  render() {
    return this.compile(template, this.props);
  }
}
