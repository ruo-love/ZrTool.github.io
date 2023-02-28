import { isEmpty } from "."

describe("test isEmpty function", () => {
  test('"" is empty', () => {
    expect(isEmpty("")).toBe(true)
  })

  test("[] is empty", () => {
    expect(isEmpty([])).toBe(true)
  })

  test("function is not empty", () => {
    const fn = () => {}
    expect(isEmpty(fn)).toBe(false)
  })

  test("all", () => {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
  })
})
