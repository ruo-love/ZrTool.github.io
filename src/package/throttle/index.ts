export function throttle<T extends Function>(fun: T, delay: number = 1000, date: boolean = true): T {
  let timer: any
  let privious: number = 0
  return function (this: any, ...args: []) {
    if (date) {
      if (!timer) {
        timer = setTimeout(() => {
          fun.apply(this, args)
          timer = null
        }, delay)
      }
    } else {
      let now = Date.now()
      if (now - privious > delay) {
        privious = now
        fun.apply(this, args)
      }
    }
  } as unknown as T
}
