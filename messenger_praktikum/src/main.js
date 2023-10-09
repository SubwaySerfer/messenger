import { Main} from './pages/Main'
import { Profile } from './pages/Profile'
import { NotFound } from './pages/NotFound'
import { Login } from './pages/Login'
import { Signin } from './pages/Signin'
import { Chat } from './pages/Chat'

const ROUTES = {
  '/not-found': NotFound(),
  '/profile': Profile(),
  '/': Main(),
  '/login': Login(),
  '/signin': Signin(),
  '/chat': Chat(),
}

window.addEventListener('DOMContentLoaded', ()=>{
  const root = document.getElementById('app')


  if(root) {
    const component = ROUTES[window.location.pathname] || NotFound()
    root.innerHTML = component
  }
})
