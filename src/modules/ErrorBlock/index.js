import Handlebars from "handlebars";

import { tmpl } from "./errorBlock.tmpl";

import { ButtonLink } from "../../components/ButtonLink";

export const ErrorBlock = ({ errorTitle, errorDescription }) => {
  return Handlebars.compile(tmpl)({errorTitle, errorDescription, 
  ButtonLink: ButtonLink({ textLink: 'Назад к чатам', to: '/chats'})
  })
}