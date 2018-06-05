const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const k = arr[i]
    let j = i
    while (j - 1 >= 0 && arr[j - 1] > k) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = k
  }
  return arr
}

export default insertionSort
