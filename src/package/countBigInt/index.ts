export function countBigInt(firstNum: string, secondNum: string): string {
  const maxLength = Math.max(firstNum.length, secondNum.length)
  firstNum = firstNum.padStart(maxLength, "0")
  secondNum = secondNum.padStart(maxLength, "0")
  let t = 0
  let f = 0
  let sum = ""
  for (let i = maxLength - 1; i >= 0; i--) {
    t = parseInt(firstNum[i]) + parseInt(secondNum[i]) + f
    f = Math.floor(t / 10)
    sum = (t % 10) + sum
  }
  if (f == 1) {
    sum = "1" + sum
  }
  return sum
}
