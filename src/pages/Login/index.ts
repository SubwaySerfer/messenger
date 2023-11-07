import Block from '../../modules/utils/Block';
import template from './index.hbs';
import { LoginForm } from './modules';

interface LoginPageProps {
  title?: string;
}

export class LoginPage extends Block<LoginPageProps> {
  constructor(props: LoginPageProps) {
    super(props);
  }

  init() {
    this.children.LoginForm = new LoginForm({});
  }

  render() {
    return this.compile(template, this.props);
  }
}

// import Handlebars from 'handlebars';

// import { tmpl } from "./login.tmpl";
// import { ButtonSubmit } from '../../components/ButtonSubmit';
// import { ButtonLink } from '../../components/ButtonLink';
// import { Input } from '../../components/Input';
// import {tmpl as modalTmpl} from '../../layout/Modal/modal.tmpl'

// export const Login = () => {
//   return Handlebars.compile(tmpl)({
//     title: 'Вход',
//     InputLogin: Input({
//       input_type: 'text',
//       input_label: 'Логин',
//       input_id: 'login',
//       input_name: 'login',
//       input_placeholder: 'Имя пользователя',
//       input_min: '3',
//       input_max: '15',
//       required: 'true',
//       isValid: 'false',
//       input_error: 'Неверный логин',
//     }),
//     InputPassword: Input({
//       input_type: 'text',
//       input_label: 'Пароль',
//       input_id: 'password',
//       input_name: 'password',
//       input_placeholder: 'Пароль',
//       input_min: '5',
//       input_max: '15',
//       required: 'true',
//       isValid: 'false',
//       input_error: 'Некорректный пароль',
//     }),

//   ButtonSubmit: ButtonSubmit({ buttonTitle: 'Войти' }),
//   ButtonLink: ButtonLink({ textLink: 'Нет аккаунта?', to: '/signin' }),
// });
// };
