import template from './index.hbs';
import Block from '../../../core/Block';

import { LineHelper } from '../../../components/LineHelper';
import { ProfileInput } from '../../../components/ProfileInput';
import FormValidator from '../../../utils/Validator';

interface DinamicDataProps {
  formId: string;
}
export class DinamicData extends Block<DinamicDataProps> {
  constructor(props: DinamicDataProps) {
    super(props);
  }

  init() {
    (this._children.EmailInput = new ProfileInput({
      inputLabel: 'Почта',
      inputPlaceholder: 'pochta@yandex.ru',
      input_name: 'email',
      id: 'email',
      events: {
        focusout: (event) => {
          const input = event.target as unknown as HTMLInputElement;
          new FormValidator(this.element as HTMLElement).checkValidity(input);
        },
      },
    })),
      (this._children.LoginInput = new ProfileInput({
        inputLabel: 'Логин',
        inputPlaceholder: 'ivanivanov',
        input_name: 'login',
        id: 'login',
        events: {
          focusout: (event) => {
            const input = event.target as unknown as HTMLInputElement;
            new FormValidator(this.element as HTMLElement).checkValidity(input);
          },
        },
      })),
      (this._children.FirstNameInput = new ProfileInput({
        inputLabel: 'Имя',
        inputPlaceholder: 'Иван',
        input_name: 'first_name',
        id: 'firstName',
        events: {
          focusout: (event) => {
            const input = event.target as unknown as HTMLInputElement;
            new FormValidator(this.element as HTMLElement).checkValidity(input);
          },
        },
      })),
      (this._children.LastNameInput = new ProfileInput({
        inputLabel: 'Фамилия',
        inputPlaceholder: 'Иванов',
        input_name: 'second_name',
        id: 'secondName',
        events: {
          focusout: (event) => {
            const input = event.target as unknown as HTMLInputElement;
            new FormValidator(this.element as HTMLElement).checkValidity(input);
          },
        },
      })),
      (this._children.NicknameInput = new ProfileInput({
        inputLabel: 'Имя в чате',
        inputPlaceholder: 'Иван',
        input_name: 'display_name',
        id: 'displayName',
        events: {
          focusout: (event) => {
            const input = event.target as unknown as HTMLInputElement;
            new FormValidator(this.element as HTMLElement).checkValidity(input);
          },
        },
      })),
      (this._children.PhoneInput = new ProfileInput({
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
