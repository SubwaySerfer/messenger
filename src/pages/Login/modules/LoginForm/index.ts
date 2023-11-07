import { ButtonSubmit, ButtonLink, Input } from '../../../../components';
import Block from '../../../../modules/utils/Block';
import template from './index.hbs';

interface LoginFormProps {
  // class?: string;
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
      input_min: 3,
      input_max: 15,
      required: true,
      isValid: false,
      input_error: 'Неверный логин',
      //events: {}, //TODO: add
    });

    this.children.InputPassword = new Input({
      input_type: 'text',
      input_label: 'Пароль',
      input_id: 'password',
      input_name: 'password',
      input_placeholder: 'Пароль',
      input_min: 5,
      input_max: 15,
      required: true,
      isValid: false,
      input_error: 'Некорректный пароль',
      //events: {}, //TODO
    });

    this.children.ButtonSubmit = new ButtonSubmit({
      buttonTitle: 'Войти',
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
