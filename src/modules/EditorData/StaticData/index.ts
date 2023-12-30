import Block from '@/core/Block';
import { template } from './index.tmpl';
import { store } from '@/core/Store';
import { ProfileString, LineHelper } from '../../../components';

export class StaticData extends Block {
  constructor(props: unknown) {
    super('div', props);
  }

  init() {
    const { user } = store.getState();
    (this.children.EmailString = new ProfileString({
      stringName: 'Почта',
      // stringValue: 'pochta@yandex.ru',
      stringValue: `${user?.email}` || '',
    })),
      (this.children.LoginString = new ProfileString({
        stringName: 'Логин',
        // stringValue: 'ivanivanov',
        stringValue: `${user?.login}` || '',
      })),
      (this.children.FirstNameString = new ProfileString({
        stringName: 'Имя',
        // stringValue: 'Иван',
        stringValue: `${user?.first_name}` || '',
      })),
      (this.children.LastNameString = new ProfileString({
        stringName: 'Фамилия',
        // stringValue: 'Иванов',
        stringValue: `${user?.second_name}` || '',
      })),
      (this.children.NicknameString = new ProfileString({
        stringName: 'Имя в чате',
        // stringValue: 'Иван',
        stringValue: `${user?.display_name}` || '',
      })),
      (this.children.PhoneString = new ProfileString({
        stringName: 'Телефон',
        // stringValue: '+7 (909) 967 30 30',
        stringValue: `${user?.phone}` || '',
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
