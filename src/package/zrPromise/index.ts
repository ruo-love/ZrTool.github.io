type TypeResolve = (data: any) => any
type TypeReject = (data: any) => any
type TypeExecutor = (resolve: TypeResolve, reject: TypeReject) => any

export class MyPromise {
  promiseStatus: "pending" | "fullfilled" | "rejected"
  promiseResult: any
  callbacks: Array<any>
  constructor(executor: TypeExecutor) {
    const that = this
    this.promiseStatus = "pending"
    this.promiseResult = null
    this.callbacks = [] //异步回调存储器
    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
    function resolve(data: any) {
      if (that.promiseStatus === "pending") {
        that.promiseStatus = "fullfilled"
        that.promiseResult = data
        setTimeout(() => {
          //保障异步执行回调
          that.callbacks.forEach(item => {
            item.onResolve(data)
          })
        }, 0)
      }
    }
    function reject(data: any) {
      if (that.promiseStatus === "pending") {
        that.promiseStatus = "rejected"
        that.promiseResult = data
        setTimeout(() => {
          //保障异步执行回调
          that.callbacks.forEach(item => {
            item.onReject(data)
          })
        }, 0)
      }
    }
  }

  then(
    onResolve = (res: any) => res,
    onReject = (err: any): any => {
      throw err
    }
  ) {
    //设置默认回调 可以保障在不传递回调的情况下 then catch 任然可以返回一个promise
    const that = this
    return new MyPromise((resolve, reject) => {
      if (this.promiseStatus === "fullfilled") {
        //如果成功执行 then回调
        setTimeout(() => {
          //保障回调异步执行
          callbackHandle(onResolve)
        }, 0)
      } else if (this.promiseStatus === "rejected") {
        //如果失败 catch失败回调
        setTimeout(() => {
          callbackHandle(onReject)
        }, 0)
      } else {
        setTimeout(() => {
          //可能存在链式调用多个异步回调 所以需要存储到集合中
          this.callbacks.push({ onResolve: () => callbackHandle(onResolve), onReject: () => callbackHandle(onReject) })
        }, 0)
      }
      function callbackHandle(fun: any) {
        try {
          const res = fun(that.promiseResult)
          if (res instanceof MyPromise) {
            res.then(
              r => resolve(r),
              e => reject(e)
            )
          } else {
            resolve(res)
          }
        } catch (err) {
          reject(err)
        }
      }
    })
  }
  catch(onReject: any) {
    return this.then(undefined, onReject)
  }
  static resolve(value: any) {
    return new MyPromise((resolve, reject) => {
      try {
        if (value instanceof MyPromise) {
          value.then(
            r => resolve(r),
            e => reject(e)
          )
        } else {
          resolve(value)
        }
      } catch (err) {
        reject(err)
      }
    })
  }
  static reject(value: any) {
    return new MyPromise((_resolve, reject) => {
      reject(value)
    })
  }
  static all(promises: Array<MyPromise> = []) {
    return new MyPromise((resolve, reject) => {
      let count = 0 //存储成功promise个数
      let result: Array<any> = [] //存储成功结果
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          r => {
            count++
            result[i] = r
            if (count === promises.length) {
              resolve(result)
            }
          },
          e => {
            reject(e)
          }
        )
      }
    })
  }
  static race(promises: Array<MyPromise> = []) {
    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          r => {
            resolve(r)
          },
          e => {
            reject(e)
          }
        )
      }
    })
  }
}
