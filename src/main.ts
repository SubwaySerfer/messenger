import '../src/sass/style.scss';
// import Block from './modules/utils/Block';
// import { loginContext, signinContext, chatsContext } from './pages';
import { Profile } from './pages/Profile';
import { ChangeData } from './pages/Profile/ChangeData';
import { ChangePassword } from './pages/Profile/ChangePassword';
import { Login } from './pages/Login';
import { SignupPage } from './pages/Signup';
import { ChatsPage } from './pages/Chats';
import { Page404 } from './pages/Page404';
import { Page500 } from './pages/Page500';

import { ROUTES } from '@/types/routes';
import Router from './core/Router';

// function render(component: Block) {
//   const root = document.querySelector('#app');
//   root?.append(component.getContent()!);
//   component.dispatchComponentDidMount();
// }

window.addEventListener('DOMContentLoaded', async () => {
  // const { href } = window.location;
  // const { origin } = window.location;
  Router.use(ROUTES.login, Login)
    .use(ROUTES.page400, Page404)
    .use(ROUTES.chat, ChatsPage)
    .use(ROUTES.page500, Page500)
    .use(ROUTES.profile, Profile)
    .use(ROUTES.profileChangeData, ChangeData)
    .use(ROUTES.profileChangePassword, ChangePassword)
    .use(ROUTES.signup, SignupPage);

  let isProtected = true;

  switch (window.location.pathname) {
    case ROUTES.login:
    case ROUTES.signup:
      isProtected = false;
      break;
  }

  try {
    //
    Router.start();
    if (!isProtected) {
      Router.go(ROUTES.chat);
    }
  } catch (err) {
    console.log('Ошибка: ', err);
    Router.start();

    //
  }
  // switch (href) {
  //   case `${origin}${Routes.LoginPage}`:
  //     render(new LoginPage(loginContext));
  //     break;
  //   case `${origin}${Routes.SigninPage}`:
  //     render(new SigninPage(signinContext));
  //     break;
  //   case `${origin}${Routes.ChatsPage}`:
  //     render(new ChatsPage(chatsContext));
  //     break;
  //   case `${origin}${Routes.Profile}`:
  //     render(new Profile({}));
  //     break;
  //   case `${origin}${Routes.ChangePassword}`:
  //     render(new ChangePassword({}));
  //     break;
  //   case `${origin}${Routes.ChangeData}`:
  //     render(new ChangeData({}));
  //     break;
  //   case `${origin}${Routes.Page404}`:
  //     render(new Page404({}));
  //     break;
  //   case `${origin}${Routes.Page500}`:
  //     render(new Page500({}));
  //     break;
  //   default:
  //     render(new Page404({}));
  // }
});
//TODO: сделать при валидацию активации пользователя, чтобы нельзя было с 404 попасть на чаты
