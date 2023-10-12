import Handlebars from "handlebars"

export const NotFound = () => {
  return Handlebars.compile('<div><h1>Not Found</h1></div>')({})
}