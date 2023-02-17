import { deepClone } from "./index"

describe("deepClone", () => {
  test("deepClone array", () => {
    expect(deepClone([1, 2, [3, 4, 5, [5, 5, 6, [67, 78]]]])).toEqual([1, 2, [3, 4, 5, [5, 5, 6, [67, 78]]]])
  })
})
