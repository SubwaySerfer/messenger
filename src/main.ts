import '../src/sass/style.scss';
// import Block from './core/Block';
// import { loginContext, signupContext, chatsContext } from './pages';
import { authController } from './controller/AuthController';
import { chatController } from './controller/ChatsController';

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

  if (
    ([Routes.login, Routes.signup] as string[]).includes(
      window.location.pathname
    )
  ) {
    isPrivateRoute = false;

    try {
      await authController.getUser();
      await chatController.getChats();
      routerApp.start();

      if (!isPrivateRoute) {
        routerApp.go(Routes.Profile);
      }
    } catch (e) {
      routerApp.start();

      if (isPrivateRoute) {
        routerApp.go(Routes.login);
      }
    }
  }
});
