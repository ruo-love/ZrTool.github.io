export function debounce<T extends Function>(callback: T, time: number, immediate: boolean = false): T {
  /**
   * callback 函数
   * time 持续时间 毫秒
   * immediate 是否立即执行
   */
  let timer: number | null
  return function (this: any, ...args: [any]) {
    timer && clearTimeout(timer)
    if (immediate) {
      if (!timer) {
        callback.apply(this, args)
      }
      timer = setTimeout(() => {
        timer = null
      }, time)
    } else {
      timer = setTimeout(() => {
        callback.apply(this, args)
      }, time)
    }
  } as unknown as T
}
