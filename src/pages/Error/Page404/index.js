import Handlebars from "handlebars";

import { tmpl } from "./page404.tmpl";

import { ErrorBlock } from "../../../modules/ErrorBlock";


export const Page404 = () => {
  return Handlebars.compile(tmpl)({
    ErrorBlock: ErrorBlock({
      errorTitle: '404',
      errorDescription: 'Не туда попали'
    })
})}