import Handlebars from "handlebars";

import { tmpl } from "./profileInput.tmpl";

export const ProfileInput = ( props ) => {
  return Handlebars.compile(tmpl)( props )
}
