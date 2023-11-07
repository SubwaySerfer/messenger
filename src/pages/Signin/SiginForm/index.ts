import { ButtonSubmit, ButtonLink, Input } from '../../../components';
import Block from '../../../modules/utils/Block';
import template from './index.hbs';

interface SigninFormProps {}

export class SigninForm extends Block {
  constructor(props: SigninFormProps) {
    super(props);
  }

  init() {
    (this.children.InputEmail = new Input({
      input_type: 'email',
      input_label: 'Почта',
      input_id: 'email',
      input_name: 'email',
      input_placeholder: 'ivanIvanov@ya.ru',
      input_min: '4',
      input_max: '30',
      required: 'true',
      isValid: 'false',
      input_error: 'Введите почту',
    })),
      (this.children.InputLogin = new Input({
        input_type: 'text',
        input_label: 'Логин',
        input_id: 'login',
        input_name: 'login',
        input_placeholder: 'Логин',
        input_min: '3',
        input_max: '15',
        required: 'true',
        isValid: 'false',
        input_error: 'Слишком короткий логин',
      })),
      (this.children.InputFirstName = new Input({
        input_type: 'text',
        input_label: 'Имя',
        input_id: 'firstName',
        input_name: 'first_name',
        input_placeholder: 'Имя',
        input_min: '3',
        input_max: '15',
        required: 'true',
        isValid: 'false',
        input_error: 'Слишком короткое имя',
      })),
      (this.children.InputLastName = new Input({
        input_type: 'text',
        input_label: 'Фамилия',
        input_id: 'lastName',
        input_name: 'second_name',
        input_placeholder: 'Фамилия',
        input_min: '2',
        input_max: '20',
        required: 'true',
        isValid: 'false',
        input_error: 'Введите фамилию',
      })),
      (this.children.InputPhone = new Input({
        input_type: 'tel',
        input_label: 'Телефон',
        input_id: 'phone',
        input_name: 'phone',
        input_placeholder: '+7(999) 999 99 99',
        input_min: '10',
        input_max: '20',
        required: 'true',
        isValid: 'false',
        input_error: 'Введите номер телефон, пример: 79999999999',
      })),
      (this.children.InputPassword1 = new Input({
        input_type: 'text',
        input_label: 'Пароль',
        input_id: 'password',
        input_name: 'password',
        input_placeholder: 'Пароль',
        input_min: '5',
        input_max: '15',
        required: 'true',
        isValid: 'false',
        input_error: 'Некорректный пароль',
      })),
      (this.children.InputPassword2 = new Input({
        input_type: 'text',
        input_label: 'Пароль',
        input_id: 'password_2',
        input_name: 'password_2',
        input_placeholder: 'Пароль',
        input_min: '5',
        input_max: '15',
        required: 'true',
        isValid: 'false',
        input_error: 'Пароли не совпадают',
      })),
      (this.children.ButtonSubmit = new ButtonSubmit({
        buttonTitle: 'Зарегистрироваться',
      }));
    this.children.ButtonLink = new ButtonLink({
      textLink: 'Войти',
      to: '/login',
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
