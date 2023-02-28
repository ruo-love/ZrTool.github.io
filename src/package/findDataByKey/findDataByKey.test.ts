import { findDataByKey } from "."

let arr = [
  {
    id: 1,
    name: "1",
    children: [
      {
        id: 11,
        name: "11"
      },
      {
        id: 12,
        name: "12"
      }
    ]
  },
  {
    id: 2,
    name: "2",
    children: [
      {
        id: 21,
        name: "21"
      },
      {
        id: 22,
        name: "22",
        children: [
          {
            id: 221,
            name: "221"
          },
          {
            id: 222,
            name: "222"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "3"
  }
]

describe("deepClone", () => {
  test("findDataByKey", () => {
    expect(findDataByKey(arr, 22)).toEqual({
      id: 22,
      name: "22",
      children: [
        {
          id: 221,
          name: "221"
        },
        {
          id: 222,
          name: "222"
        }
      ]
    })
  })
})
