import Handlebars from "handlebars";

import { tmpl } from "./editorData.tmpl";

export const EditorData = () =>{
  return Handlebars.compile(tmpl)({})
}