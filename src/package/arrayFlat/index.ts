export function arrayFlat(array: Array<any>, shallow: boolean = false): Array<any> {
  let result: Array<any> = []
  if (shallow) {
    result = array.flat()
  } else {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        result = result.concat(arrayFlat(array[i]))
      } else {
        result.push(array[i])
      }
    }
  }

  return result
}
