import { ButtonSubmit, ButtonLink, Input } from '@/components';
import Block from '@/core/Block';
import { template } from './index.tmpl';
import FormValidator from '@/utils/Validator';

interface LoginFormProps {
  action?: string;
  method?: string;
  events?: {
    submit: (e: SubmitEvent) => void;
    focusout?: (event: HTMLFormElement) => void;
  };
}

export class LoginForm extends Block<LoginFormProps> {
  constructor(props: LoginFormProps) {
    super('div', props);
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
      // linkPath: '/messenger',
      id: 'loginForm',
      class: 'button-submit',
      type: 'submit',
      // events: {
      //   submit: (e) => {
      //     e.preventDefault;
      //     console.log('jj');
      //   },
      // },
    });
    this.children.ButtonLink = new ButtonLink({
      textLink: 'Нет аккаунта?',
      to: '/sign-up',
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
