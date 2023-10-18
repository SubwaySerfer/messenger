import Handlebars from "handlebars";

import { tmpl } from "./ChatSidebar.tmpl";

import { SearchInput } from "../../components/SearchInput";
import { ChatBlock } from '../../components/ChatBlock'

export const ChatSidebar = () => {
  return Handlebars.compile(tmpl)({
    SearchInput: SearchInput({
      input_name: 'search_input',
      input_type: 'text'
    }),
    ChatBlock: ChatBlock({
    })
  })
}
