export function createWaterfallLayout(
  cols: number = 10,
  selector: string,
  containerId: string = "water-container"
): void {
  const container = document.getElementById(containerId)
  if (!container) return
  const width: number = Math.floor(container.clientWidth / cols)
  const heightArray: Array<any> = []
  const elementArray = document.querySelectorAll(selector)
  elementArray.forEach((e: any, i) => {
    if (i < cols) {
      heightArray[i] = e.clientHeight
      e.style.positon = "absolute"
      e.style.left = i * width + "px"
      e.style.top = 0
    } else {
      const minHeight = Math.min(...heightArray)
      const minHeightIndex = heightArray.indexOf(minHeight)
      e.style.positon = "absolute"
      e.style.left = minHeightIndex * width + "px"
      e.style.top = minHeight + "px"
      heightArray[minHeightIndex] += e.clientHeight
    }
  })
}
