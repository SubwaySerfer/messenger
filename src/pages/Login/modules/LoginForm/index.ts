import { ButtonSubmit, ButtonLink, Input } from '../../../../components';
import Block from '../../../../core/Block';
import template from './index.hbs';
import FormValidator from '../../../../utils/Validator';
import Router, { Routes } from '../../../../core/Router';

interface LoginFormProps {
  action?: string;
  method?: string;
  events?: {
    submit: (event: HTMLFormElement) => void;
    focusout?: (event: HTMLFormElement) => void;
  };
}

export class LoginForm extends Block<LoginFormProps> {
  constructor() {
    super({});
  }

  init() {
    this._children.InputLogin = new Input({
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

    this._children.InputPassword = new Input({
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

    this._children.ButtonSubmit = new ButtonSubmit({
      buttonTitle: 'Войти',
      linkPath: '/messenger',
      id: 'loginForm',
      class: 'button-submit',
    });
    this._children.ButtonLink = new ButtonLink({
      textLink: 'Нет аккаунта?',
      class: 'button-link',
      events: {
        click: () => {
          Router.go(Routes.signup);
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
