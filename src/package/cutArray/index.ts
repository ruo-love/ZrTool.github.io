export function cutArray(array: TArray, size: number): TArray {
  let res: TArray = []
  for (let i = 0; i < array.length; i = size + i) {
    res.push(array.slice(i, size + i))
  }

  return res
}
