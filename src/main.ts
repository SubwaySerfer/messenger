import '../src/sass/style.scss';
import { AuthController } from './controller/AuthController';
// import { ChatsController } from './controller/ChatsController';

import { Profile } from './pages/Profile';
import { ChangeData } from './pages/Profile/ChangeData';
import { ChangePassword } from './pages/Profile/ChangePassword';
import { LoginPage } from './pages/Login';
import { SignupPage } from './pages/Signup';
import { Routes } from './core/Router';
import { ChatsPage } from './pages/Chats';
import { Page404 } from './pages/Error/Page404';
import { Page500 } from './pages/Error/Page500';
import { routerApp } from './core/Router';

window.addEventListener('DOMContentLoaded', async () => {
  routerApp
    .use(Routes.login, LoginPage)
    .use(Routes.signup, SignupPage)
    .use(Routes.chats, ChatsPage)
    .use(Routes.Profile, Profile)
    .use(Routes.ChangeData, ChangeData)
    .use(Routes.ChangePassword, ChangePassword)
    .use(Routes.Page500, Page500)
    .use(Routes.Page404, Page404);

  let isPrivateRoute = true;

  switch (window.location.pathname) {
    case Routes.login:
    case Routes.signup:
      isPrivateRoute = false;
      break;
  }

  try {
    await AuthController.fetchUser();
    // await ChatsController.fetchChats();
    routerApp.start();
    if (!isPrivateRoute) {
      routerApp.go(Routes.chats);
    }
  } catch (e) {
    console.log('Ошибка:', e);
    routerApp.start();

    if (isPrivateRoute) {
      routerApp.go(Routes.login);
    }
  }
});
