import Block from '../../../core/Block';
import template from './index.hbs';
import { ProfileString, LineHelper } from '../../../components';
import { State, store, withStore } from '../../../core/Store';
export class StaticData extends Block {
  constructor() {
    super({});
  }
  init() {
    const { user } = store.getState();
    this.setProps({ userName: user?.first_name + ' ' + user?.second_name });
    this.children.EmailString = new ProfileString({
      stringName: 'Почта',
      stringValue: this.props.user,
    });
    (this.children.LoginString = new ProfileString({
      stringName: 'Логин',
      stringValue: this.props.login ?? 'Не заполнено',
    })),
      (this.children.FirstNameString = new ProfileString({
        stringName: 'Имя',
        stringValue: this.props.first_name ?? 'Не заполнено',
      })),
      (this.children.LastNameString = new ProfileString({
        stringName: 'Фамилия',
        stringValue: this.props.second_name ?? 'Не заполнено',
      })),
      (this.children.NicknameString = new ProfileString({
        stringName: 'Имя в чате',
        stringValue: this.props.display_name ?? 'Не заполнено',
      })),
      (this.children.PhoneString = new ProfileString({
        stringName: 'Телефон',
        stringValue: this.props.phone ?? 'Не заполнено',
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

const mapStateToProps = (state: State) => ({
  first_name: state.user?.first_name,
  second_name: state.user?.second_name,
  display_name: state.user?.display_name,
  login: state.user?.login,
  phone: state.user?.phone,
  email: state.user?.email,
});

export const Profile = withStore(mapStateToProps)(StaticData);
