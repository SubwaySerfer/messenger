import Handlebars from "handlebars";

import { tmpl } from "./chatPage.tmpl";


export const Chat = () => {
  return Handlebars.compile(tmpl)({})
}