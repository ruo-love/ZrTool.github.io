import { arrayFlat } from "./index"

describe("arrayFlat", () => {
  test("deep mode", () => {
    expect(arrayFlat([1, 2, [3, 4, 5, [5, 5, 6, [67, 78]]]])).toEqual([1, 2, 3, 4, 5, 5, 5, 6, 67, 78])
  })
  test("shallow mode", () => {
    expect(arrayFlat([1, 2, [3, 4, 5, [5, 5, 6, [67, 78]]]], true)).toEqual([1, 2, 3, 4, 5, [5, 5, 6, [67, 78]]])
  })
})
