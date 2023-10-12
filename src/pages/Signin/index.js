import Handlebars from "handlebars";

import { tmpl } from "./sigin.tmpl";


export const Signin = () => {
  return Handlebars.compile(tmpl)({})
}