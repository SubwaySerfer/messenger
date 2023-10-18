import Handlebars from "handlebars";

import { tmpl } from "./dinamicData.tmpl";

import { LineHelper } from '../../../components/LineHelper'
import { ProfileInput } from "../../../components/ProfileInput";


export const DinamicData = () =>{
  return Handlebars.compile(tmpl)({

    EmailInput: ProfileInput({
      inputName: 'Почта',
      inputPlaceholder: 'pochta@yandex.ru',
      input_name: 'email'
    }),
    LoginInput: ProfileInput({
      inputName: 'Логин',
      inputPlaceholder: 'ivanivanov',
      input_name: 'login'
    }),
    FirstNameInput: ProfileInput({
      inputName: 'Имя',
      inputPlaceholder: 'Иван',
      input_name: 'first_name'
    }),
    LastNameInput: ProfileInput({
      inputName: 'Фамилия',
      inputPlaceholder: 'Иванов',
      input_name: 'second_name'
    }),
    NicknameInput: ProfileInput({
      inputName: 'Имя в чате',
      inputPlaceholder: 'Иван',
      input_name: 'display_name'
    }),
    PhoneInput: ProfileInput({
      inputName: 'Телефон',
      inputPlaceholder: '+7 (909) 967 30 30',
      input_name: 'phone'
    }),

    LineHelper: LineHelper({})
  })
}
