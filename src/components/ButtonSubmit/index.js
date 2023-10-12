import Handlebars from "handlebars";

import { tmpl } from "./buttonSubmit.tmpl"

export const ButtonSubmit = ({buttonTitle}) => {

  return Handlebars.compile(tmpl)({buttonTitle})
}