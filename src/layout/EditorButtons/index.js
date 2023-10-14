import Handlebars from "handlebars";

import { tmpl } from "./editorButtons.tmpl";

import { ButtonLink } from '../../components/ButtonLink'

export const EditorButtons = () => {
  return Handlebars.compile(tmpl)({
    ChangeData: ButtonLink({
      textLink: 'Изменить данные'
    }),
    ChangePassword: ButtonLink({
      textLink: 'Изменить пароль'
    }),
    ExitButton: ButtonLink({
      textLink: 'Выйти',
      exitMode: 'true',
    }),

  })
}