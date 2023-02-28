export function findDataByKey(data: Array<any>, value: any, key: string = "id", children: string = "children"): any {
  let result: any = null

  for (let i = 0; i < data.length; i++) {
    if (data[i][key] === value) {
      result = data[i]
      break
    } else if (data[i][children]) {
      result = findDataByKey(data[i][children], value, key, children)
      if (result) break
    }
  }
  return result
}
