import '../src/sass/style.sass'

import { Main} from './pages/Main'
import { Profile } from './pages/Profile'
import { NotFound } from './pages/NotFound'
import { Login } from './pages/Login'
import { Signin } from './pages/Signin'
import { Chats } from './pages/Chats'

const ROUTES = {
  '/not-found': NotFound(),
  '/profile': Profile(),
  '/': Main(),
  '/login': Login(),
  '/signin': Signin(),
  '/chats': Chats(),
}

window.addEventListener('DOMContentLoaded', ()=>{
  const root = document.getElementById('app')

  

  if(root) {
    const component = ROUTES[window.location.pathname] || NotFound()
    root.innerHTML = component
  }
})
