import Handlebars from "handlebars";

import { tmpl } from "./profile.tmpl";

import { SmallSidebar } from "../../layout/SmallSidebar";
import { Editor } from "../../components/Editor";

export const Profile = () =>{
  return Handlebars.compile(tmpl)({
    SmallSidebar: SmallSidebar({}),
    Editor: Editor({}),
  })
}