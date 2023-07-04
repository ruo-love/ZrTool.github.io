declare module "@zrcode/jstool" {
  export function arrayFlat(array: TArray, shallow?: boolean): TArray
  export function countBigInt(firstNum: string, secondNum: string): string
  export function createWaterfallLayout(cols: number, selector: string, containerId: string): void
  export function typeOf(target: any): TypeOfResult
  export function toRandom(min: number, max: number, type: "number" | "string"): number | string
  export function isEmpty(target: any): boolean
  export function getSearchParams(url: string, type: "url" | "params"): object
  export function findDataByKey(data: TArray, value: any, key: string, children: string): any
  export function deepClone(target: any, map: MapType): any
  export interface MyPromise {
    then: (resolve: Function, reject: Function) => any
    catch: (reject: Function) => any
  }
  export function countDown(time: string | number | Date): string
  export function bubbleSort(array: TArray, reverse: boolean): TArray
  export function fastSort(array: TArray, reverse: boolean): TArray
  export function concatArray(...arg: any): TArray
  export function intersectionArray(firstArry: TArray, sencondArray: TArray): TArray
  export function arrayToTree(
    array: TArray,
    parentId: number | string,
    idProp: string,
    parentIdProp: string,
    childrenProp: string
  ): TArray
  export function debounce<T extends Function>(callback: T, time: number, immediate: boolean): T
  export function throttle<T extends Function>(fun: T, delay: number, date: boolean): T
  export function isExist<T>(x: T): x is T
  export function isNumber(x: any): boolean
  export function once<T extends Function>(fn: T): T
  export function sleep(time: number): Promise<number>
  export function isSafeNumber(x: any): boolean
  export function splitIntegerDecimal(number: number | string): [string, string]
  export function toAsync<T, U = Error>(promise: Promise<T>, errorExt?: object): Promise<[U, undefined] | [null, T]>
  export function pipe(...fns: Function[]): any
  export function toArray<T>(x: any): Array<T>
  export function toggle<Args>(fns: Array<any>): any
  export function filterValue(value: string | number, filterType: string, _oldValue?: string | number): string | number
}
type MapType = Map<any, any>
type TArray = Array<any>
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
