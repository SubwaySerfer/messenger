import Block from '../../../core/Block';
import template from './index.hbs';
import { withStore } from '../../../core/Store';
import { ProfileString, LineHelper } from '../../../components';

export class StaticData extends Block {
  constructor(props: unknown) {
    super(props);
  }
  init() {
    (this._children.EmailString = new ProfileString({
      stringName: 'Почта',
      stringValue: this.props.user,
    })),
      (this._children.LoginString = new ProfileString({
        stringName: 'Логин',
        stringValue: this.props.login ?? 'Не заполнено',
      })),
      (this._children.FirstNameString = new ProfileString({
        stringName: 'Имя',
        stringValue: this.props.first_name ?? 'Не заполнено',
      })),
      (this._children.LastNameString = new ProfileString({
        stringName: 'Фамилия',
        stringValue: this.props.second_name ?? 'Не заполнено',
      })),
      (this._children.NicknameString = new ProfileString({
        stringName: 'Имя в чате',
        stringValue: this.props.display_name ?? 'Не заполнено',
      })),
      (this._children.PhoneString = new ProfileString({
        stringName: 'Телефон',
        stringValue: this.props.phone ?? 'Не заполнено',
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

export const withUser = withStore((state) => ({ ...state.user }));
console.log('trt', withStore);
