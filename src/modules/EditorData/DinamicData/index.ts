import template from './index.hbs';
import Block from '../../utils/Block';

import { LineHelper } from '../../../components/LineHelper';
import { ProfileInput } from '../../../components/ProfileInput';

export class DinamicData extends Block {
  constructor(props: unknown) {
    super(props);
  }

  init() {
    (this.children.EmailInput = new ProfileInput({
      inputName: 'Почта',
      inputPlaceholder: 'pochta@yandex.ru',
      input_name: 'email',
    })),
      (this.children.LoginInput = new ProfileInput({
        inputName: 'Логин',
        inputPlaceholder: 'ivanivanov',
        input_name: 'login',
      })),
      (this.children.FirstNameInput = new ProfileInput({
        inputName: 'Имя',
        inputPlaceholder: 'Иван',
        input_name: 'first_name',
      })),
      (this.children.LastNameInput = new ProfileInput({
        inputName: 'Фамилия',
        inputPlaceholder: 'Иванов',
        input_name: 'second_name',
      })),
      (this.children.NicknameInput = new ProfileInput({
        inputName: 'Имя в чате',
        inputPlaceholder: 'Иван',
        input_name: 'display_name',
      })),
      (this.children.PhoneInput = new ProfileInput({
        inputName: 'Телефон',
        inputPlaceholder: '+7 (909) 967 30 30',
        input_name: 'phone',
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
