import Handlebars from "handlebars";

import { tmpl } from './dinamicData.tmpl'

export const EditDinamicData = ()=>{
  return Handlebars.compile(tmpl)({})
}