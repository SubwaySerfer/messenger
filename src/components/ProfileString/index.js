import Handlebars from "handlebars";

import { tmpl } from "./profileString.tmpl";

export const ProfileString = ({ stringName, stringValue }) => {
  return Handlebars.compile(tmpl)({ stringName, stringValue })
}
