import Handlebars from "handlebars";

import { tmpl } from "./chatField.tmpl";

export const ChatField = () => {
  return Handlebars.compile(tmpl)({
    
  })
}