import { countBigInt } from "./index"

describe("countMaxNumber", () => {
  test("01", () => {
    expect(countBigInt("1000000000000000", "22")).toBe("1000000000000022")
  })
  test("02", () => {
    expect(countBigInt("1", "22222222222222222222222222")).toBe("22222222222222222222222223")
  })
})
