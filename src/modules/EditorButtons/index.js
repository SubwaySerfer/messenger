import Handlebars from "handlebars";

import { tmpl } from "./editorButtons.tmpl";

import { ButtonLink } from '../../components/ButtonLink'
import { LineHelper } from "../../components/LineHelper";


export const EditorButtons = () => {
  return Handlebars.compile(tmpl)({
    ChangeData: ButtonLink({
      textLink: 'Изменить данные',
      to: '/profile-change-data'
    }),
    ChangePassword: ButtonLink({
      textLink: 'Изменить пароль',
      to: '/profile-change-password'
    }),
    ExitButton: ButtonLink({
      textLink: 'Выйти',
      exitMode: 'true',
      to: '/login'
    }),
    LineHelper: LineHelper({})

  })
}
