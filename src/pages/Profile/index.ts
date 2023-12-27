import Block from '../../core/Block';
import template from './index.hbs';

import { AvatarBlock, EditorButtons } from '../../modules';

import { SmallSidebar } from '../../layout/SmallSidebar';
import { StaticData } from '../../modules/EditorData/StaticData';
import { routerApp, Routes } from '../../core/Router';
import { State, withStore } from '../../core/Store';

export class ProfilePage extends Block {
  constructor() {
    super({});
  }

  init() {
    (this.children.SmallSidebar = new SmallSidebar({
      events: {
        click: () => {
          routerApp.go(Routes.chats);
        },
      },
    })),
      (this.children.AvatarBlock = new AvatarBlock({
        nameProfile: 'Иван',
        avatar: 'assets/images/main-avatar.jpg',
        imageAlt: 'motorcycle helmet on the car roof.',
      })),
      (this.children.EditorData = new StaticData()),
      (this.children.EditorButtons = new EditorButtons());
  }

  render() {
    return this.compile(template, this.props);
  }
}
const mapStateToProps = (state: State) => ({
  first_name: state.user?.first_name,
  second_name: state.user?.second_name,
  display_name: state.user?.display_name,
  login: state.user?.login,
  phone: state.user?.phone,
  email: state.user?.email,
});
export const Profile = withStore(mapStateToProps)(ProfilePage);
