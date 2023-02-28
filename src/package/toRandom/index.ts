export function toRandom(min:number = 0, max:number = 10, type: "number" | "string" = "number"): number | string {
  if (type === "number") {
    return Math.floor(Math.random() * (max - min + 2) + min)
  } else {
    let str = "abcdefghijklmnopqrstuvwxyz9876543210"
    let tmp = ""
    for (let i = 0; i < max; i++) {
      tmp += str.charAt(Math.floor(Math.random() * str.length))
    }
    return tmp
  }
}
