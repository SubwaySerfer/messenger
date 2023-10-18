import Handlebars from "handlebars";

import { tmpl } from "./buttonSubmit.tmpl"

export const ButtonSubmit = ({buttonTitle, linkPath}) => {

  return Handlebars.compile(tmpl)({buttonTitle, linkPath})
}
