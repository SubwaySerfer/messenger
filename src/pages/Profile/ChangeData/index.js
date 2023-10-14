import Handlebars from "handlebars";

import { tmpl } from "./changeData.tmpl";

import { SmallSidebar } from "../../../layout/SmallSidebar";
import { EditorData } from "../../../modules/EditorData";
import { AvatarBlock } from "../../../modules/AvatarBlock";
import { ButtonSubmit } from '../../../components/ButtonSubmit'

export const ProfileChangeData = () =>{
  return Handlebars.compile(tmpl)({
    SmallSidebar: SmallSidebar({ arrowLink: '/profile' }),
    AvatarBlock: AvatarBlock({
      nameProfile: 'Иван',
      avatarPath: 'assets/images/main-avatar.jpg',
      showName: 'false'
    }),
    EditorData: EditorData({}),
    ButtonSubmit: ButtonSubmit({buttonTitle: 'Сохранить', linkPath: '/profile'}),
  })
}