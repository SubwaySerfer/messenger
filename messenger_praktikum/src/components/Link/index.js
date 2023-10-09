import Handlebars from "handlebars"

import { tmpl } from "./link.tmpl"

export const Link = ({to, text}) => {
  return Handlebars.compile(tmpl)({to, text})
}
