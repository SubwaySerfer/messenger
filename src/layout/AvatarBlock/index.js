import Handlebars from "handlebars";

import { tmpl } from "./avatarBlock.tmpl";

export const AvatarBlock = ({avatarPath, nameProfile}) => {
  return Handlebars.compile(tmpl)({avatarPath, nameProfile})
}