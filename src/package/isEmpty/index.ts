import { typeOf } from "../typeOf"

export function isEmpty(target: any): boolean {
  let res = false

  switch (typeOf(target)) {
    case "Map":
      res = (target as Map<any, any>).size === 0
      break
    case "Set":
      res = (target as Set<any>).size === 0
      break
    case "Object":
      res = Object.keys(target as object).length === 0
      break
    case "FormData":
      res = (target as FormData).keys().next().done ?? true
      break
    case "Fuction":
      res = false
      break
    case "Number":
      res = false
      break
    case "String":
      res = target.trim().length === 0
      break
    case "Array":
      res = target.length === 0
      break
    case "Null":
      res = true
      break
    case "Undefined":
      res = true
      break
  }

  return res
}
