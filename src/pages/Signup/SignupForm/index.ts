import { ButtonSubmit, ButtonLink, Input } from '../../../components';
import Block from '@/core/Block';
import { template } from './index.tmpl';
import FormValidator from '../../../utils/Validator';

interface SignupFormProps {
  title?: string;
  events?: {
    submit: (event: HTMLFormElement) => void;
  };
}

export class SignupForm extends Block<SignupFormProps> {
  constructor(props: SignupFormProps) {
    super('div', props);
  }

  init() {
    (this.children.InputEmail = new Input({
      input_type: 'email',
      input_label: 'Почта',
      input_id: 'email',
      input_name: 'email',
      input_placeholder: 'ivanIvanov@ya.ru',
      events: {
        focusout: (event) => {
          const input = event.target as unknown as HTMLInputElement;
          new FormValidator(this.element as HTMLElement).checkValidity(input);
        },
      },
    })),
      (this.children.InputLogin = new Input({
        input_type: 'text',
        input_label: 'Логин',
        input_id: 'login',
        input_name: 'login',
        input_placeholder: 'Логин',
        events: {
          focusout: (event) => {
            const input = event.target as unknown as HTMLInputElement;
            new FormValidator(this.element as HTMLElement).checkValidity(input);
          },
        },
      })),
      (this.children.InputFirstName = new Input({
        input_type: 'text',
        input_label: 'Имя',
        input_id: 'firstName',
        input_name: 'first_name',
        input_placeholder: 'Имя',
        events: {
          focusout: (event) => {
            const input = event.target as unknown as HTMLInputElement;
            new FormValidator(this.element as HTMLElement).checkValidity(input);
          },
        },
      })),
      (this.children.InputLastName = new Input({
        input_type: 'text',
        input_label: 'Фамилия',
        input_id: 'lastName',
        input_name: 'second_name',
        input_placeholder: 'Фамилия',
        events: {
          focusout: (event) => {
            const input = event.target as unknown as HTMLInputElement;
            new FormValidator(this.element as HTMLElement).checkValidity(input);
          },
        },
      })),
      (this.children.InputPhone = new Input({
        input_type: 'tel',
        input_label: 'Телефон',
        input_id: 'phone',
        input_name: 'phone',
        input_placeholder: '+7 999 999 99 99',
        events: {
          focusout: (event) => {
            const input = event.target as unknown as HTMLInputElement;
            new FormValidator(this.element as HTMLElement).checkValidity(input);
          },
        },
      })),
      (this.children.InputPassword1 = new Input({
        input_type: 'text',
        input_label: 'Пароль',
        input_id: 'password',
        input_name: 'password',
        input_placeholder: 'Пароль',
        events: {
          focusout: (event) => {
            const input = event.target as unknown as HTMLInputElement;
            new FormValidator(this.element as HTMLElement).checkValidity(input);
          },
        },
      })),
      (this.children.InputPassword2 = new Input({
        input_type: 'text',
        input_label: 'Пароль',
        input_id: 'password_2',
        input_name: 'password_2',
        input_placeholder: 'Пароль',
        events: {
          focusout: (event) => {
            const input = event.target as unknown as HTMLInputElement;
            new FormValidator(this.element as HTMLElement).checkValidity(input);
          },
        },
      })),
      (this.children.ButtonSubmit = new ButtonSubmit({
        buttonTitle: 'Зарегистрироваться',
        type: 'submit',
        linkPath: '/',
        id: 'signinForm',
        class: 'button-submit',
      }));
    this.children.ButtonLink = new ButtonLink({
      textLink: 'Войти',
      to: '/',
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
