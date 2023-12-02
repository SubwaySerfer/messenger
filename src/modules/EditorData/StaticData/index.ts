import Block from '../../../core/Block';
import template from './index.hbs';

import { ProfileString, LineHelper } from '../../../components';

export class StaticData extends Block {
  constructor() {
    super({});
  }

  init() {
    (this._children.EmailString = new ProfileString({
      stringName: 'Почта',
      stringValue: 'pochta@yandex.ru',
    })),
      (this._children.LoginString = new ProfileString({
        stringName: 'Логин',
        stringValue: 'ivanivanov',
      })),
      (this._children.FirstNameString = new ProfileString({
        stringName: 'Имя',
        stringValue: 'Иван',
      })),
      (this._children.LastNameString = new ProfileString({
        stringName: 'Фамилия',
        stringValue: 'Иванов',
      })),
      (this._children.NicknameString = new ProfileString({
        stringName: 'Имя в чате',
        stringValue: 'Иван',
      })),
      (this._children.PhoneString = new ProfileString({
        stringName: 'Телефон',
        stringValue: '+7 (909) 967 30 30',
      })),
      (this._children.LineHelper = new LineHelper({})),
      (this._children.LineHelper2 = new LineHelper({})),
      (this._children.LineHelper3 = new LineHelper({})),
      (this._children.LineHelper4 = new LineHelper({})),
      (this._children.LineHelper5 = new LineHelper({}));
  }

  render() {
    return this.compile(template, this.props);
  }
}
