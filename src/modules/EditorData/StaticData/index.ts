import Block from '@/core/Block';
import { template } from './index.tmpl';

import { ProfileString, LineHelper } from '../../../components';

export class StaticData extends Block {
  constructor(props: unknown) {
    super('div', props);
  }

  init() {
    (this.children.EmailString = new ProfileString({
      stringName: 'Почта',
      stringValue: 'pochta@yandex.ru',
    })),
      (this.children.LoginString = new ProfileString({
        stringName: 'Логин',
        stringValue: 'ivanivanov',
      })),
      (this.children.FirstNameString = new ProfileString({
        stringName: 'Имя',
        stringValue: 'Иван',
      })),
      (this.children.LastNameString = new ProfileString({
        stringName: 'Фамилия',
        stringValue: 'Иванов',
      })),
      (this.children.NicknameString = new ProfileString({
        stringName: 'Имя в чате',
        stringValue: 'Иван',
      })),
      (this.children.PhoneString = new ProfileString({
        stringName: 'Телефон',
        stringValue: '+7 (909) 967 30 30',
      })),
      (this.children.LineHelper = new LineHelper({})),
      (this.children.LineHelper2 = new LineHelper({})),
      (this.children.LineHelper3 = new LineHelper({})),
      (this.children.LineHelper4 = new LineHelper({})),
      (this.children.LineHelper5 = new LineHelper({}));
  }

  render() {
    return this.compile(template, this.props);
  }
}
