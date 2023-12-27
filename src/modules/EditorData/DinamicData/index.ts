import template from './index.hbs';
import Block from '../../../core/Block';

import { LineHelper } from '../../../components/LineHelper';
import { ProfileInput } from '../../../components/ProfileInput';
import FormValidator from '../../../utils/Validator';
import { IUser } from '../../../core/Store';

interface DinamicDataProps extends IUser {}
export class DinamicData extends Block<DinamicDataProps> {
  constructor(props: DinamicDataProps) {
    super(props);
  }

  init() {
    (this.children.EmailInput = new ProfileInput({
      inputLabel: 'Почта',
      inputPlaceholder: this.props.email ?? 'pochta@yandex.ru',
      input_name: 'email',
      id: 'email',
      events: {
        focusout: (event) => {
          const input = event.target as unknown as HTMLInputElement;
          new FormValidator(this.element as HTMLElement).checkValidity(input);
        },
      },
    })),
      (this.children.LoginInput = new ProfileInput({
        inputLabel: 'Логин',
        inputPlaceholder: this.props.login ?? 'ivanivanov',
        input_name: 'login',
        id: 'login',
        events: {
          focusout: (event) => {
            const input = event.target as unknown as HTMLInputElement;
            new FormValidator(this.element as HTMLElement).checkValidity(input);
          },
        },
      })),
      (this.children.FirstNameInput = new ProfileInput({
        inputLabel: 'Имя',
        inputPlaceholder: this.props.first_name ?? 'Иван',
        input_name: 'first_name',
        id: 'firstName',
        events: {
          focusout: (event) => {
            const input = event.target as unknown as HTMLInputElement;
            new FormValidator(this.element as HTMLElement).checkValidity(input);
          },
        },
      })),
      (this.children.LastNameInput = new ProfileInput({
        inputLabel: 'Фамилия',
        inputPlaceholder: this.props.second_name ?? 'Иванов',
        input_name: 'second_name',
        id: 'secondName',
        events: {
          focusout: (event) => {
            const input = event.target as unknown as HTMLInputElement;
            new FormValidator(this.element as HTMLElement).checkValidity(input);
          },
        },
      })),
      (this.children.NicknameInput = new ProfileInput({
        inputLabel: 'Имя в чате',
        inputPlaceholder: this.props.display_name ?? 'Иван',
        input_name: 'display_name',
        id: 'displayName',
        events: {
          focusout: (event) => {
            const input = event.target as unknown as HTMLInputElement;
            new FormValidator(this.element as HTMLElement).checkValidity(input);
          },
        },
      })),
      (this.children.PhoneInput = new ProfileInput({
        inputLabel: 'Телефон',
        inputPlaceholder: '+7 (909) 967 30 30',
        input_name: 'phone',
        id: 'phone',
        events: {
          focusout: (event) => {
            const input = event.target as unknown as HTMLInputElement;
            new FormValidator(this.element as HTMLElement).checkValidity(input);
          },
        },
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
