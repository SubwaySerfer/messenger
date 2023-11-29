import { ButtonSubmit, ButtonLink, Input } from '../../../../components';
import Block from '../../../../modules/utils/Block';
import template from './index.hbs';
import FormValidator from '../../../../modules/utils/Validator';

interface LoginFormProps {
  action?: string;
  method?: string;
  events?: {
    submit: (event: HTMLFormElement) => void;
    focusout?: (event: HTMLFormElement) => void;
  };
}

export class LoginForm extends Block<LoginFormProps> {
  constructor(props: LoginFormProps) {
    super(props);
  }

  init() {
    this.children.InputLogin = new Input({
      input_type: 'text',
      input_label: 'Логин',
      input_id: 'login',
      input_name: 'login',
      input_placeholder: 'Имя пользователя',
      events: {
        focusout: (event) => {
          const input = event.target as unknown as HTMLInputElement;
          new FormValidator(this.element as HTMLElement).checkValidity(input);
        },
      },
    });

    this.children.InputPassword = new Input({
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
    });

    this.children.ButtonSubmit = new ButtonSubmit({
      buttonTitle: 'Войти',
      linkPath: '/messenger',
      id: 'loginForm',
      class: 'button-submit',
    });
    this.children.ButtonLink = new ButtonLink({
      textLink: 'Нет аккаунта?',
      to: '/signin',
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
