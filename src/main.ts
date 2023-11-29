import '../src/sass/style.scss';
import Block from './modules/utils/Block';
import { loginContext, signupContext, chatsContext } from './pages';

import { Profile } from './pages/Profile';
import { ChangeData } from './pages/Profile/ChangeData';
import { ChangePassword } from './pages/Profile/ChangePassword';
import { LoginPage } from './pages/Login';
import { SignupPage } from './pages/Signup';
import { Routes } from './router/constants';
import { ChatsPage } from './pages/Chats';
import { Page404 } from './pages/Error/Page404';
import { Page500 } from './pages/Error/Page500';

function render(component: Block) {
  const root = document.querySelector('#app');
  root?.append(component.getContent()!);
  component.dispatchComponentDidMount();
}

window.addEventListener('DOMContentLoaded', async () => {
  const { href } = window.location;
  const { origin } = window.location;

  switch (href) {
    case `${origin}${Routes.LoginPage}`:
      render(new LoginPage(loginContext));
      break;
    case `${origin}${Routes.SignupPage}`:
      render(new SignupPage(signupContext));
      break;
    case `${origin}${Routes.ChatsPage}`:
      render(new ChatsPage(chatsContext));
      break;
    case `${origin}${Routes.Profile}`:
      render(new Profile({}));
      break;
    case `${origin}${Routes.ChangePassword}`:
      render(new ChangePassword({}));
      break;
    case `${origin}${Routes.ChangeData}`:
      render(new ChangeData({}));
      break;
    case `${origin}${Routes.Page404}`:
      render(new Page404({}));
      break;
    case `${origin}${Routes.Page500}`:
      render(new Page500({}));
      break;
    default:
      render(new Page404({}));
  }
});
//TODO: сделать при валидацию активации пользователя, чтобы нельзя было с 404 попасть на чаты
