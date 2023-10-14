import Handlebars from "handlebars";

import { tmpl } from "./dinamicData.tmpl";

import { LineHelper } from '../../../components/LineHelper'
import { ProfileInput } from "../../../components/ProfileInput";


export const DinamicData = () =>{
  return Handlebars.compile(tmpl)({

    EmailInput: ProfileInput({
      inputName: 'Почта',
      inputPlaceholder: 'pochta@yandex.ru'
    }),
    LoginInput: ProfileInput({
      inputName: 'Логин',
      inputPlaceholder: 'ivanivanov'
    }),
    FirstNameInput: ProfileInput({
      inputName: 'Имя',
      inputPlaceholder: 'Иван'
    }),
    LastNameInput: ProfileInput({
      inputName: 'Фамилия',
      inputPlaceholder: 'Иванов'
    }),
    NicknameInput: ProfileInput({
      inputName: 'Имя в чате',
      inputPlaceholder: 'Иван'
    }),
    PhoneInput: ProfileInput({
      inputName: 'Телефон',
      inputPlaceholder: '+7 (909) 967 30 30'
    }),



    LineHelper: LineHelper({})
  })
}