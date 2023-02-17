export function deepClone(target: any, map = new Map()) {
  if (!target || typeof target != "object") return target
  if ([RegExp, Date].includes(target.constructor)) return new target.constructor(target)
  if (map.get(target)) return map.get(target)
  let newTarget: any = Array.isArray(target) ? [] : {}
  map.set(target, newTarget)
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      if (typeof target[key] == "object") {
        newTarget[key] = deepClone(target[key], map)
      } else {
        newTarget[key] = target[key]
      }
    }
  }
  return newTarget
}
