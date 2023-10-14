import Handlebars from "handlebars";

import { tmpl } from "./avatarBlock.tmpl";

export const AvatarBlock = ({avatarPath, nameProfile, showName}) => {
  return Handlebars.compile(tmpl)({avatarPath, nameProfile, showName})
}