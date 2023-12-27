import '../src/sass/style.scss';
import { Profile } from './pages/Profile';
import { ChangeData } from './pages/Profile/ChangeData';
import { ChangePassword } from './pages/Profile/ChangePassword';
// import { Login } from './pages/Login';
// import { SignupPage } from './pages/Signup';
// import { ChatsPage } from './pages/Chats';
import { Page404 } from './pages/Page404';
import { Page500 } from './pages/Page500';

import { ROUTES } from '@/types/routes';
import Router from './core/Router';

window.addEventListener('DOMContentLoaded', async () => {
  Router.use(ROUTES.page400, Page404)
    // .use(ROUTES.login, Login)
    // .use(ROUTES.chat, ChatsPage)
    .use(ROUTES.page500, Page500)
    .use(ROUTES.profile, Profile)
    .use(ROUTES.profileChangeData, ChangeData)
    .use(ROUTES.profileChangePassword, ChangePassword);
  // .use(ROUTES.signup, SignupPage);

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

    if (isProtected) {
      Router.go(ROUTES.login);
    }
  }
});
//TODO: сделать при валидацию активации пользователя, чтобы нельзя было с 404 попасть на чаты
