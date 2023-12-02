import { ButtonSubmit, ButtonLink, Input } from '../../../components';
import Block from '../../../core/Block';
import template from './index.hbs';
import FormValidator from '../../../utils/Validator';
import Router, { Routes } from '../../../core/Router';
import { authController } from '../../../controller/AuthController';
import { checkValidityInput } from '../../../utils/checkValidityInput';
import { ComponentPropsType } from '../../../types/componentPropsType';

interface SignupFormProps extends ComponentPropsType {
  title?: string;
}

export class SignupForm extends Block<SignupFormProps> {
  constructor() {
    super({});
  }

  init() {
    (this._children.InputEmail = new Input({
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
      (this._children.InputLogin = new Input({
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
      (this._children.InputFirstName = new Input({
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
      (this._children.InputLastName = new Input({
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
      (this._children.InputPhone = new Input({
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
      (this._children.InputPassword1 = new Input({
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
      (this._children.InputPassword2 = new Input({
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
      (this._children.ButtonSubmit = new ButtonSubmit({
        buttonTitle: 'Зарегистрироваться',
        type: 'submit',
        linkPath: '/',
        id: 'signupForm',
        class: 'button-submit',
      }));
    this._children.ButtonLink = new ButtonLink({
      textLink: 'Войти',
      class: 'button-link',
      events: {
        click: () => {
          Router.go(Routes.login);
        },
      },
    });

    this.props.events = {
      async submit(e: SubmitEvent) {
        e.preventDefault();
        e.stopPropagation();

        const {
          email: { value: email },
          phone: { value: phone },
          first_name: { value: first_name },
          second_name: { value: second_name },
          login: { value: login },
          password: { value: password },
          password_2: { value: password_2 },
        } = e.target! as typeof e.target & {
          email: { value: string };
          phone: { value: string };
          first_name: { value: string };
          second_name: { value: string };
          login: { value: string };
          password: { value: string };
          password_2: { value: string };
        };

        // TODO
        if (password !== password_2) {
          console.log('Пароли не совпадают', 'warning');
          return;
        }

        const arrayInputs = (e.target as HTMLFormElement).querySelectorAll(
          'input'
        ) as NodeListOf<HTMLInputElement>;

        arrayInputs.forEach(checkValidityInput);

        const isCorrect = Array.from(arrayInputs).some((el) =>
          el.checkValidity()
        );
        if (!isCorrect) return;

        await authController.registration({
          email,
          phone,
          first_name,
          second_name,
          login,
          password,
        });

        console.log({
          email,
          phone,
          first_name,
          second_name,
          login,
          password,
          password_2,
        });
      },
    };
  }

  render() {
    return this.compile(template, this.props);
  }
}
