import Handlebars from "handlebars"

import { tmpl } from "./buttonLink.tmpl"

export const ButtonLink = ({to, textLink, exitMode}) => {
  
  return Handlebars.compile(tmpl)({to, textLink, exitMode})
}
