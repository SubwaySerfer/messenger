import Handlebars from "handlebars";

import { tmpl } from "./editor.tmpl";

export const Editor = () =>{
  return Handlebars.compile(tmpl)({})
}