import { ButtonSubmit, ButtonLink, Input } from '../../../../components';
import Block from '../../../../core/Block';
import template from './index.hbs';
import FormValidator from '../../../../utils/Validator';
import { routerApp, Routes } from '../../../../core/Router';
// import { onSubmitForm } from '../../../../components/FormUserData/form';
import { INPUT_PATTERNS } from '../../../../types/patterns';

interface LoginFormProps {
  action?: string;
  method?: string;
  events?: {
    submit?: (event: SubmitEvent) => void;
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
      pattern: INPUT_PATTERNS.login,
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
      pattern: INPUT_PATTERNS.password,
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
      id: 'loginForm',
      class: 'button-submit',
      type: 'submit',
      // events: {
      //   submit: onSubmitForm,
      // },
    });
    this.children.ButtonLink = new ButtonLink({
      textLink: 'Нет аккаунта?',
      class: 'button-link',
      events: {
        click: () => {
          routerApp.go(Routes.signup);
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
