import Handlebars from "handlebars";

import { tmpl } from "./chatPage.tmpl";
import { ChatSidebar } from "../../modules/ChatSidebar";
import { ChatField } from "../../components/ChatField";



export const Chat = () => {
  return Handlebars.compile(tmpl)({
    ChatSidebar: ChatSidebar({}),
    ChatField: ChatField({})
  })
}