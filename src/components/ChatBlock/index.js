import Handlebars from "handlebars";

import { tmpl } from './chatBlock.tmpl'

export const ChatBlock = ({props}) => {
  return Handlebars.compile(tmpl)({props})
}