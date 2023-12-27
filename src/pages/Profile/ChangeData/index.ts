import { template } from './index.tmpl';
import Block from '@/core/Block';

import { SmallSidebar } from '../../../layout/SmallSidebar';
import { DinamicData } from '../../../modules/EditorData/DinamicData';
import { AvatarBlock } from '../../../modules/AvatarBlock';
import { ButtonSubmit } from '../../../components/ButtonSubmit';

export class ChangeData extends Block {
  constructor(props: unknown) {
    super('div', props);
  }

  init() {
    (this.children.SmallSidebar = new SmallSidebar({ arrowLink: '/profile' })),
      (this.children.AvatarBlock = new AvatarBlock({
        nameProfile: 'Иван',
        avatar: 'assets/images/main-avatar.jpg',
        imageAlt: 'motorcycle helmet on the car roof.',
        showName: 'false',
      })),
      (this.children.DinamicData = new DinamicData({
        formId: 'dataForm',
      })),
      (this.children.ButtonSubmit = new ButtonSubmit({
        buttonTitle: 'Сохранить',
        linkPath: '/profile',
        id: 'dataForm',
        class: 'button-submit',
      }));
  }

  render() {
    return this.compile(template, this.props);
  }
}
