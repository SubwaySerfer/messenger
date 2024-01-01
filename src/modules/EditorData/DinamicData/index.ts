import { template } from './index.tmpl';
import Block from '@/core/Block';

import { LineHelper } from '@/components/LineHelper';
import { ProfileInput } from '@/components/ProfileInput';
import FormValidator from '@/utils/Validator';
import { store } from '@/core/Store';
import { ButtonSubmit } from '@/components';

interface DinamicDataProps {
  formId: string;
  events: {
    submit?: (e: SubmitEvent) => void;
  };
}
export class DinamicData extends Block<DinamicDataProps> {
  constructor(props: DinamicDataProps) {
    super('div', props);
  }

  init() {
    const { user } = store.getState();
    (this.children.EmailInput = new ProfileInput({
      inputLabel: 'Почта',
      inputPlaceholder: `${user?.email}` || '',
      input_value: `${user?.email}` || '',
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
        inputPlaceholder: `${user?.login}` || '',
        input_name: 'login',
        input_value: `${user?.login}` || '',
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
        inputPlaceholder: `${user?.first_name}` || '',
        input_name: 'first_name',
        input_value: `${user?.first_name}` || '',
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
        inputPlaceholder: `${user?.second_name}` || '',
        input_name: 'second_name',
        input_value: `${user?.second_name}` || '',
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
        inputPlaceholder: `${user?.display_name}` || '',
        input_name: 'display_name',
        input_value: `${user?.display_name}` || '',
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
        inputPlaceholder: `${user?.phone}` || '',
        input_name: 'phone',
        input_value: `${user?.phone}` || '',
        id: 'phone',
        events: {
          focusout: (event) => {
            const input = event.target as unknown as HTMLInputElement;
            new FormValidator(this.element as HTMLElement).checkValidity(input);
          },
        },
      })),
      (this.children.ButtonSubmit = new ButtonSubmit({
        buttonTitle: 'Сохранить',
        type: 'submit',
        id: 'dataForm',
        class: 'button-submit',
      }));
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
