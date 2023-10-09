import Handlebars from "handlebars"

import {Link} from '../../components/Link'
import { tmpl } from "./profile.tmpl"


export const Profile = () => {
  return Handlebars.compile(tmpl)({
    mainPageLink: Link({ to: '/', text: 'main page'}),
    chatPageLink: Link({ to: '/chat', text: 'chat page'})
  })
}