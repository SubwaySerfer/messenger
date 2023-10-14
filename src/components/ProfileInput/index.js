import Handlebars from "handlebars";

import { tmpl } from "./profileInput.tmpl";

export const ProfileString = ({ stringName, stringValue }) => {
  return Handlebars.compile(tmpl)({ stringName, stringValue })
}