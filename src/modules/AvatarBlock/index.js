import Handlebars from "handlebars";

import { tmpl } from "./avatarBlock.tmpl";

export const AvatarBlock = (props) => {
  return Handlebars.compile(tmpl)(props)
}
