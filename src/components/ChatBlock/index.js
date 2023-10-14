import Handlebars from "handlebars";

import { tmpl } from './chatBlock.tmpl'

import { chatsData } from "../../modules/ChatSidebar/chatsData";

export const ChatBlock = ({props}) => {
  return Handlebars.compile(tmpl)({chatsData, props})
}