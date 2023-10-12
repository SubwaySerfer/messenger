import Handlebars from "handlebars";

import { tmpl } from "../ButtonSubmit/buttonSubmit.tmpl"

export const ButtonSubmit = () => {

  return Handlebars.compile(tmpl)({buttonTitle:'Авторизоваться'})
}