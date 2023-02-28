import { isSafeNumber } from "../isSafeNumber"

export function splitIntegerDecimal(number: number | string): [string, string] {
  if (isSafeNumber(number)) {
    number = number.toString()
  }
  const res: [string, string] = [number as string, ""]
  if (typeof number !== "string") {
    return res
  }
  const match = number.match(/\.(\d+)$/)
  const pointIndex = match?.index ?? -1
  const hasOnlyPoint = number.indexOf(".") === pointIndex
  if (!hasOnlyPoint || typeof match?.[1] !== "string") return res
  const isDecimal = isSafeNumber(parseInt(match[1]))
  if (!isDecimal) return res
  res[0] = number.substring(0, pointIndex)
  res[1] = number.substring(pointIndex + 1, number.length)
  return res
}
