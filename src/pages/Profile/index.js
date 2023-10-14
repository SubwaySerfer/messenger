import Handlebars from "handlebars";

import { tmpl } from "./profile.tmpl";

import { SmallSidebar } from "../../layout/SmallSidebar";
import { EditorData } from "../../components/EditorData";
import { EditorButtons } from "../../layout/EditorButtons";
import { AvatarBlock } from "../../layout/AvatarBlock";

export const Profile = () =>{
  return Handlebars.compile(tmpl)({
    SmallSidebar: SmallSidebar({}),
    AvatarBlock: AvatarBlock({nameProfile: 'Sasha',avatarPath: 'assets/images/main-avatar.jpg'}),
    EditorData: EditorData({}),
    EditorButtons: EditorButtons({}),
  })
}