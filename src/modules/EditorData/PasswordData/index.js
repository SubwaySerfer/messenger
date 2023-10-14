import Handlebars from "handlebars";

import { tmpl } from "./passwordData.tmpl";

import { LineHelper } from '../../../components/LineHelper'
import { ProfileInput } from "../../../components/ProfileInput";


export const PasswordData = () =>{
  return Handlebars.compile(tmpl)({

    OldPasInput: ProfileInput({
      inputName: 'Старый пароль',
      inputPlaceholder: '•••••••••'
    }),
    NewPasInput: ProfileInput({
      inputName: 'Новый пароль',
      inputPlaceholder: '•••••••••••'
    }),
    RepeatNewPasInput: ProfileInput({
      inputName: 'Повторите новый пароль',
      inputPlaceholder: '•••••••••••'
    }),

    LineHelper: LineHelper({})
  })
}