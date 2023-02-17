declare module "zrtool" {
  export function arrayFlat(array: Array<any>, shallow?: boolean): Array<any>
  export function countMaxNumber(firstNum: string, secondNum: string): string
  export function createWaterfallLayout(cols: number, selector: string): void
}
