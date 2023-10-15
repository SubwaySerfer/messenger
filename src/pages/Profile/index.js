import Handlebars from "handlebars";

import { tmpl } from "./profile.tmpl";

import { SmallSidebar } from "../../layout/SmallSidebar";
import { EditorData } from "../../modules/EditorData/StaticData";
import { EditorButtons } from "../../modules/EditorButtons";
import { AvatarBlock } from '../../modules/AvatarBlock'

export const Profile = () =>{
  return Handlebars.compile(tmpl)({
    SmallSidebar: SmallSidebar({ arrowLink: '/chats' }),
    AvatarBlock: AvatarBlock({nameProfile: 'Иван',avatar: 'assets/images/main-avatar.jpg'}),
    EditorData: EditorData({}),
    EditorButtons: EditorButtons({}),
  })
}