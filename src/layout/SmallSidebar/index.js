import Handlebars from "handlebars";

import { tmpl } from "./smallSidebar.tmpl";

export const SmallSidebar = ({ arrowLink }) =>{
  return Handlebars.compile(tmpl)({ arrowLink })
}