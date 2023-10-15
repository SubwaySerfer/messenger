import Handlebars from "handlebars";

import { tmpl } from "./chatPage.tmpl";
import { ChatSidebar } from "../../modules/ChatSidebar";
import { ChatField } from "../../components/ChatField";



export const Chats = () => {
  return Handlebars.compile(tmpl)({
    ChatSidebar: ChatSidebar({}),
    ChatField: ChatField({})
  })
}
