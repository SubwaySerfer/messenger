import Handlebars from "handlebars";

import { tmpl } from "./ChatSidebar.tmpl";

import { SearchInput } from "../../components/SearchInput";
import { ChatBlock } from '../../components/ChatBlock'
import { chatsData } from "./chatsData";

export const ChatSidebar = () => {
  return Handlebars.compile(tmpl)({
    SearchInput: SearchInput({}),
    ChatBlock: ChatBlock({
      // chatName: 'hello',

    })
  })
}