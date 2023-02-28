export function intersectionArray(firstArry: TArray, sencondArray: TArray):TArray {
  const minLengthArray = firstArry.length > sencondArray.length ? sencondArray : firstArry
  const maxLengthArray = firstArry.length > sencondArray.length ? firstArry : sencondArray
  const array: TArray = []
  minLengthArray.forEach(e => {
    if (maxLengthArray.includes(e) && !array.includes(e)) {
      array.push(e)
    }
  })
  return array
}
