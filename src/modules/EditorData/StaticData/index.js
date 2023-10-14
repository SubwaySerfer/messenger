import Handlebars from "handlebars";

import { tmpl } from "./editorData.tmpl";

import { ProfileString } from '../../../components/ProfileString'
import { LineHelper } from '../../../components/LineHelper'


export const EditorData = () =>{
  return Handlebars.compile(tmpl)({
    EmailString: ProfileString({
      stringName: 'Почта',
      stringValue: 'pochta@yandex.ru'
    }),
    LoginString: ProfileString({
      stringName: 'Логин',
      stringValue: 'ivanivanov'
    }),
    FirstNameString: ProfileString({
      stringName: 'Имя',
      stringValue: 'Иван'
    }),
    LastNameString: ProfileString({
      stringName: 'Фамилия',
      stringValue: 'Иванов'
    }),
    NicknameString: ProfileString({
      stringName: 'Имя в чате',
      stringValue: 'Иван'
    }),
    PhoneString: ProfileString({
      stringName: 'Телефон',
      stringValue: '+7 (909) 967 30 30'
    }),
    LineHelper: LineHelper({})
  })
}