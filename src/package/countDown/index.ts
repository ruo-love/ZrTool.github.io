export function countDown(time: string | number | Date) {
  const endTime = new Date(time).getTime()
  const currentTime = Date.now()
  const spaceTime = endTime - currentTime
  const day = Math.floor(spaceTime / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, "0")
  const t = Math.floor((spaceTime / (1000 * 60 * 60)) % 24)
    .toString()
    .padStart(2, "0")
  const m = Math.floor((spaceTime / (1000 * 60)) % 60)
    .toString()
    .padStart(2, "0")
  const s = Math.floor((spaceTime / 1000) % 60)
    .toString()
    .padStart(2, "0")

  return `${day}天${t}时${m}分${s}秒`
}
