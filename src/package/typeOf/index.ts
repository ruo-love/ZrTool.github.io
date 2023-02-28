type TypeOfResult =
  | "Map"
  | "Set"
  | "Object"
  | "Array"
  | "FormData"
  | "String"
  | "Symbol"
  | "Number"
  | "Boolean"
  | "Null"
  | "Undefined"
  | "Fuction"

export function typeOf(target: any): TypeOfResult {
  return Object.prototype.toString.call(target).replace(/\[\w+ (\w+)]/, "$1") as TypeOfResult
}
