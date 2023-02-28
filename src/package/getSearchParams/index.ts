export function getSearchParams(url: string, type: "url" | "params" = "url"): object {
  let search
  if (type === "url") {
    search = url.substring(url.indexOf("?") + 1)
  } else {
    search = url
  }

  // 创建一个URLSearchParams实例
  const urlSearchParams = new URLSearchParams(search)
  // 把键值对列表转换为一个对象
  console.log(Object.fromEntries(urlSearchParams.entries()))
  return Object.fromEntries(urlSearchParams.entries())
}
