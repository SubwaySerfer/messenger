import Handlebars from "handlebars";

import { tmpl } from "./ChatSidebar.tmpl";

import { SearchInput } from "../../components/SearchInput";

export const ChatSidebar = () => {
  return Handlebars.compile(tmpl)({
    SearchInput: SearchInput({})
  })
}