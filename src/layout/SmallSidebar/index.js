import Handlebars from "handlebars";

import { tmpl } from "./smallSidebar.tmpl";

export const SmallSidebar = () =>{
  return Handlebars.compile(tmpl)({})
}