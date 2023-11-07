import Block from '../../modules/utils/Block';
import template from './index.hbs';

import { SmallSidebar } from '../../layout/SmallSidebar';
import { EditorData } from '../../modules/EditorData/StaticData';
import { EditorButtons } from '../../modules/EditorButtons';
import { AvatarBlock } from '../../modules/AvatarBlock';

export const Profile = () => {
  return Handlebars.compile(tmpl)({
    SmallSidebar: SmallSidebar({ arrowLink: '/chats' }),
    AvatarBlock: AvatarBlock({
      nameProfile: 'Иван',
      avatar: 'assets/images/main-avatar.jpg',
      imageAlt: 'motorcycle helmet on the car roof.',
    }),
    EditorData: EditorData({}),
    EditorButtons: EditorButtons({}),
  });
};
