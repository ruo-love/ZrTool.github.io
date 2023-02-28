import { typeOf } from "../typeOf/index"

export function isNumber(x: any): boolean {
  return typeOf(x) === "Number"
}
