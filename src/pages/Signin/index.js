import Handlebars from "handlebars";

import { tmpl } from "./sigin.tmpl";
import { ButtonSubmit } from "../../components/ButtonSubmit";
import { ButtonLink } from "../../components/ButtonLink";
import { Input } from "../../components/Input";




export const Signin = () => {
  return Handlebars.compile(tmpl)({
    title: 'Регистрация',

    InputEmail: Input({
      input_type: 'email',
      input_label: 'Почта',
      input_id: 'email',
      input_name: 'email',
      input_placeholder: 'ivanIvanov@ya.ru',
      input_min: '4',
      input_max: '30',
      required: 'true',
      isValid: 'false',
      input_error: 'Введите почту'
    }),
    InputLogin: Input({
      input_type: 'text',
      input_label: 'Логин',
      input_id: 'login',
      input_name: 'login',
      input_placeholder: 'Логин',
      input_min: '3',
      input_max: '15',
      required: 'true',
      isValid: 'false',
      input_error: 'Слишком короткий логин'
    }),
    InputFirstName: Input({
      input_type: 'text',
      input_label: 'Имя',
      input_id: 'firstName',
      input_name: 'firstName',
      input_placeholder: 'Имя',
      input_min: '3',
      input_max: '15',
      required: 'true',
      isValid: 'false',
      input_error: 'Слишком короткое имя'
    }),
    InputLastName: Input({
      input_type: 'text',
      input_label: 'Фамилия',
      input_id: 'lastName',
      input_name: 'lastName',
      input_placeholder: 'Фамилия',
      input_min: '2',
      input_max: '20',
      required: 'true',
      isValid: 'false',
      input_error: 'Введите фамилию'
    }),
    InputPhone: Input({
      input_type: 'tel',
      input_label: 'Телефон',
      input_id: 'phone',
      input_name: 'phone',
      input_placeholder: '+7(999) 999 99 99',
      input_min: '10',
      input_max: '20',
      required: 'true',
      isValid: 'false',
      input_error: 'Введите номер телефон, пример: 79999999999'
    }),
    InputPassword1: Input({
      input_type: 'text',
      input_label: 'Пароль',
      input_id: 'password',
      input_name: 'password',
      input_placeholder: 'Пароль',
      input_min: '5',
      input_max: '15',
      required: 'true',
      isValid: 'false',
      input_error: 'Некорректный пароль'
    }),
    InputPassword2: Input({
      input_type: 'text',
      input_label: 'Пароль',
      input_id: 'password',
      input_name: 'password',
      input_placeholder: 'Пароль',
      input_min: '5',
      input_max: '15',
      required: 'true',
      isValid: 'false',
      input_error: 'Пароли не совпадают'
    }),

    ButtonSubmit: ButtonSubmit({buttonTitle: 'Зарегистрироваться'}),
    ButtonLink: ButtonLink({textLink: 'Войти', to: '/login'})
  })
}