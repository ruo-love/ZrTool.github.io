export function arrayToTree(
  array: TArray,
  parentId: number | string,
  idProp: string = "id",
  parentIdProp: string = "parentId",
  childrenProp: string = "children"
): TArray {
  return array
    .filter(item => item[parentIdProp] === parentId)
    .map(item => ({ ...item, [childrenProp]: arrayToTree(array, item[idProp]) }))
}
