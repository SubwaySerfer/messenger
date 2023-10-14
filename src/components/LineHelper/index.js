import Handlebars from "handlebars";

import { tmpl } from "./lineHelper.tmpl";

export const LineHelper = () => {
  return Handlebars.compile(tmpl)({
  })
}