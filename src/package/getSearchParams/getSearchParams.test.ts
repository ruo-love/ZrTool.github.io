import { getSearchParams } from "."

describe("getSearchParams", () => {
  test("getSearchParams url", () => {
    expect(
      getSearchParams(
        "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=68018901_49_oem_dg&wd=%E7%B1%BB%E5%9E%8B%E2%80%9CURLSearchParams%E2%80%9D%E4%B8%8A%E4%B8%8D%E5%AD%98%E5%9C%A8%E5%B1%9E%E6%80%A7%E2%80%9Centries%E2%80%9D"
      )
    ).toEqual({
      ie: "utf-8",
      f: "8",
      rsv_bp: "1",
      tn: "68018901_49_oem_dg",
      wd: "类型“URLSearchParams”上不存在属性“entries”"
    })
  })
  test("getSearchParams params params", () => {
    expect(
      getSearchParams(
        "?ie=utf-8&f=8&rsv_bp=1&tn=68018901_49_oem_dg&wd=%E7%B1%BB%E5%9E%8B%E2%80%9CURLSearchParams%E2%80%9D%E4%B8%8A%E4%B8%8D%E5%AD%98%E5%9C%A8%E5%B1%9E%E6%80%A7%E2%80%9Centries%E2%80%9D",
        "params"
      )
    ).toEqual({
      ie: "utf-8",
      f: "8",
      rsv_bp: "1",
      tn: "68018901_49_oem_dg",
      wd: "类型“URLSearchParams”上不存在属性“entries”"
    })
  })
})
