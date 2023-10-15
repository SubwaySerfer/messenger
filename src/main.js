import '../src/sass/style.sass'

import { Profile } from './pages/Profile'
import { ProfileChangeData } from './pages/Profile/ChangeData'
import { ProfileChangePassword } from './pages/Profile/ChangePassword'
import { Login } from './pages/Login'
import { Signin } from './pages/Signin'
import { Chats } from './pages/Chats'

import { Page404 } from './pages/Error/page404'
import { Page500 } from './pages/Error/Page500'


const ROUTES = {
  '/profile': Profile(),
  '/profile-change-data': ProfileChangeData(),
  '/profile-change-password': ProfileChangePassword(),

  '/': Login(),
  '/login': Login(),
  
  '/signin': Signin(),
  '/chats': Chats(),

  '/404': Page404(),
  '/500': Page500(),

}

window.addEventListener('DOMContentLoaded', ()=>{
  const root = document.getElementById('app')

  

  if(root) {
    const component = ROUTES[window.location.pathname] || Page404()
    root.innerHTML = component
  }
})
