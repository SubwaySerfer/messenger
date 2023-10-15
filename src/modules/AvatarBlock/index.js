import Handlebars from "handlebars";

import { tmpl } from "./avatarBlock.tmpl";

export const AvatarBlock = ({avatar, nameProfile, showName}) => {
  return Handlebars.compile(tmpl)({avatar, nameProfile, showName})
}