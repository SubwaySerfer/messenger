import template from './index.hbs';
import Block from '../../../core/Block';
import Router, { Routes } from '../../../core/Router';
import { SmallSidebar } from '../../../layout/SmallSidebar';
import { DinamicData } from '../../../modules/EditorData/DinamicData';
import { AvatarBlock } from '../../../modules/AvatarBlock';
import { ButtonSubmit } from '../../../components/ButtonSubmit';

export class ChangeData extends Block {
  constructor(props: unknown) {
    super(props);
  }

  init() {
    (this.children.SmallSidebar = new SmallSidebar({ arrowLink: '/settings' })),
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
        events: {
          click: () => {
            Router.go(Routes.Profile);
          },
        },
        // linkPath: '/settings',
        id: 'dataForm',
        class: 'button-submit',
      }));
  }

  render() {
    return this.compile(template, this.props);
  }
}
