import { typeOf } from "."

describe("typeOf", () => {
  test("typeOf Number", () => {
    expect(typeOf(12)).toBe("Number")
  })
  test("typeOf String", () => {
    expect(typeOf("asd")).toBe("String")
  })
  test("typeOf Boolean", () => {
    expect(typeOf(false)).toBe("Boolean")
  })
  test("typeOf Undefined", () => {
    expect(typeOf(undefined)).toBe("Undefined")
  })
  test("typeOf Null", () => {
    expect(typeOf(null)).toBe("Null")
  })
  test("typeOf Symbol", () => {
    expect(typeOf(Symbol())).toBe("Symbol")
  })
  test("typeOf Set", () => {
    expect(typeOf(new Set())).toBe("Set")
  })
  test("typeOf Map", () => {
    expect(typeOf(new Map())).toBe("Map")
  })

  test("typeOf Function", () => {
    expect(typeOf(() => {})).toBe("Function")
  })
  test("typeOf 0", () => {
    expect(typeOf(0)).toBe("Number")
  })
})
