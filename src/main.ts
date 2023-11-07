import '../src/sass/style.sass';
import Block from './modules/utils/Block';
import { loginContext, signinContext } from './pages';

// import { Profile } from './pages/Profile';
// import { ProfileChangeData } from './pages/Profile/ChangeData';
// import { ProfileChangePassword } from './pages/Profile/ChangePassword';
import { LoginPage } from './pages/Login';
import { SigninPage } from './pages/Signin';
import { Routes } from './router/constants';
// import { Signin } from './pages/Signin';
// import { Chats } from './pages/Chats';

// import { Page404 } from './pages/Error/Page404';
// import { Page500 } from './pages/Error/Page500';

// const ROUTES = {
// '/profile': Profile(),
// '/profile-change-data': ProfileChangeData(),
// '/profile-change-password': ProfileChangePassword(),

// '/': LoginPage,
// '/login': LoginPage,

// '/signin': Signin(),
// '/chats': Chats(),

// '/404': Page404(),
// '/500': Page500(),
// };

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
    case `${origin}${Routes.SigninPage}`:
      render(new SigninPage(signinContext));
      break;
  }
});
