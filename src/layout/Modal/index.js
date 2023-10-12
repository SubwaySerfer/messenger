import Handlebars from "handlebars"

import { tmpl } from "./modal.tmpl"

export const modal = () => {

  return Handlebars.compile(tmpl)({})
}

