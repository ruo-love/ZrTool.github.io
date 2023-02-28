export function bubbleSort(array: Array<number>, reverse: boolean = false): Array<number> {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (reverse) {
        if (array[i] <= array[j]) {
          let max = array[j]
          array[j] = array[i]
          array[i] = max
        }
      } else {
        if (array[i] >= array[j]) {
          let max = array[j]
          array[j] = array[i]
          array[i] = max
        }
      }
    }
  }
  return array
}
export function fastSort(array: Array<number>, reverse: boolean = false): Array<number> {
  if (array.length <= 1) {
    return array
  }
  let leftArray: Array<number> = []
  let rightArray: Array<number> = []
  let start = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] > start) {
      rightArray.push(array[i])
    } else {
      leftArray.push(array[i])
    }
  }

  return reverse
    ? [].concat(fastSort(rightArray, reverse) as any, [start] as any, fastSort(leftArray, reverse) as any)
    : [].concat(fastSort(leftArray, reverse) as any, [start] as any, fastSort(rightArray, reverse) as any)
}
