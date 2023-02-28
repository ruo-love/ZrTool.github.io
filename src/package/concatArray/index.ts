export function concatArray(...arg:TArray): TArray {
  let array: TArray = []
  arg.forEach((e: any) => {
    array = [...new Set(array.concat(e))]
  })

  return array
}
