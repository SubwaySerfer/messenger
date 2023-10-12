import Handlebars from "handlebars"

import { tmpl } from "./input.tmpl"

export const Input = (props) => {
  return Handlebars.compile(tmpl)(props)
}
