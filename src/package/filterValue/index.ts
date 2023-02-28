import { isEmpty } from "../isEmpty"

const FilterType = {
  uint: "uint",
  int: "int",
  ufloat: "ufloat",
  float: "float",
  udecimal: "udecimal",
  notSpacing: "notSpacing",
  rate: "rate",
  minus: "minus"
}
export function filterValue(value: string | number, filterType: string, _oldValue?: string | number) {
  if (isEmpty(filterType)) return value
  let res: any

  if (filterType === FilterType.udecimal) {
    res = String(value).replace(/[^0-9.]/g, "")
    res = res.match(/\d*\.?\d{0,2}/)?.[0] ?? res
  } else if (filterType === FilterType.minus) {
    res = String(value).replace(/[^0-9.-]/g, "")
    res = res.match(/^-?\d*\.?\d{0,2}/)?.[0] ?? res
  } else if (filterType === FilterType.rate) {
    res = String(value).replace(/[^0-9.]/g, "")
    res = res.match(/\d*\.?\d{0,6}/)?.[0] ?? res
  } else {
    const reg = {
      [FilterType.uint]: /[^0-9]/gi,
      [FilterType.int]: /[^0-9-]/gi,
      [FilterType.float]: /[^0-9-.]/gi,
      [FilterType.ufloat]: /[^0-9.]/gi,
      [FilterType.notSpacing]: /\s/gi
    }[filterType]

    if (!reg) return value

    res = String(value).replace(reg, "")
  }
  return res
}
