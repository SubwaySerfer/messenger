import Handlebars from "handlebars";

import { tmpl } from "./searchInput.tmpl";

export const SearchInput = (props) => {
  return Handlebars.compile(tmpl)(props)
}