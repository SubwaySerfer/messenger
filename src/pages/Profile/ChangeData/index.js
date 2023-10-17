import Handlebars from "handlebars";

import { tmpl } from "./changeData.tmpl";

import { SmallSidebar } from "../../../layout/SmallSidebar";
import { DinamicData } from "../../../modules/EditorData/DinamicData";
import { AvatarBlock } from "../../../modules/AvatarBlock";
import { ButtonSubmit } from '../../../components/ButtonSubmit'

export const ProfileChangeData = () =>{
  return Handlebars.compile(tmpl)({
    SmallSidebar: SmallSidebar({ arrowLink: '/profile' }),
    AvatarBlock: AvatarBlock({
      nameProfile: 'Иван',
      avatar: 'assets/images/main-avatar.jpg',
      imageAlt: 'motorcycle helmet on the car roof.',
      showName: 'false'
    }),
    DinamicData: DinamicData({}),
    ButtonSubmit: ButtonSubmit({buttonTitle: 'Сохранить', linkPath: '/profile'}),
  })
}
