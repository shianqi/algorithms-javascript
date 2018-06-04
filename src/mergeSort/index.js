const mergeSort = (arr, start = 0, end) => {
  if (end == null) {
    end = arr.length - 1
  }
  if (start < end) {
    const n = Math.floor((start + end) / 2)
    mergeSort(arr, start, n)
    mergeSort(arr, n + 1, end)
    merge(arr, start, n, end)
  }
  return arr
}

const merge = (arr, start, middle, end) => {
  const arr1 = arr.slice(start, middle + 1)
  const arr2 = arr.slice(middle + 1, end + 1)
  arr1.push(Number.MAX_VALUE)
  arr2.push(Number.MAX_VALUE)
  let i = 0
  let j = 0
  for (let k = start; k <= end; k++) {
    if (arr1[i] <= arr2[j]) {
      arr[k] = arr1[i]
      i++
    } else {
      arr[k] = arr2[j]
      j++
    }
  }
  return arr
}

export default mergeSort
