import Handlebars from "handlebars";

import { tmpl } from "./changePassword.tmpl";

// import { LineHelper } from '../../../components/LineHelper'
// import { ProfileInput } from "../../../components/ProfileInput";


import { SmallSidebar } from "../../../layout/SmallSidebar";
import { AvatarBlock } from "../../../modules/AvatarBlock";
import { ButtonSubmit } from '../../../components/ButtonSubmit'
import { PasswordData } from "../../../modules/EditorData/PasswordData";




export const ProfileChangePassword = () =>{
  return Handlebars.compile(tmpl)({
    SmallSidebar: SmallSidebar({ arrowLink: '/profile' }),
    AvatarBlock: AvatarBlock({
      nameProfile: 'Иван',
      avatar: 'assets/images/main-avatar.jpg',
      showName: 'false'
    }),
    ButtonSubmit: ButtonSubmit({buttonTitle: 'Сохранить', linkPath: '/profile'}),
    PasswordData: PasswordData({})

  })
}
