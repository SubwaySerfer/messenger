import Handlebars from "handlebars"

import { tmpl } from "./input.tmpl"

export const input = ({to, text}) => {
  return Handlebars.compile(tmpl)({to, text})
}
