import Handlebars from "handlebars";

import { tmpl } from "./page500.tmpl";

import { ErrorBlock } from "../../../modules/ErrorBlock";

export const Page500 = () => {
  return Handlebars.compile(tmpl)({
    ErrorBlock: ErrorBlock({
      errorTitle: '500',
      errorDescription: 'Мы уже фиксим'
    })
    
})}
