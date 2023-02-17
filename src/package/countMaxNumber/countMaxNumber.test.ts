import { countMaxNumber } from "./index"

describe("countMaxNumber", () => {
  test("01", () => {
    expect(countMaxNumber("1000000000000000", "22")).toBe("1000000000000022")
  })
  test("02", () => {
    expect(countMaxNumber("1", "22222222222222222222222222")).toBe("22222222222222222222222223")
  })
})
