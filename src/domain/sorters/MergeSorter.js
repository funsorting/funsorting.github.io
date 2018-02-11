const MergeSorter = (list, cb) => {
  const setAsSorting = (elements) => {
    const clone = JSON.parse(JSON.stringify(list))

    clone.forEach(x => x.isSorting = false)

    elements.forEach(x => {
      const listElem = clone.find(y => y.position === x.position)
      listElem.isSorting = true
    })

    console.log("CLONE", clone)
    cb(clone)
  }
  const merge = (left, right) => {
    const original = left.concat(right)
    setAsSorting(original)

    let result = []
    let indexLeft = 0
    let indexRight = 0

    while (indexLeft < left.length && indexRight < right.length) {
      if (left[indexLeft].value < right[indexRight].value) {
        result.push(left[indexLeft])

        indexLeft++

      } else {
        result.push(right[indexRight])

        indexRight++
      }
    }

    const ratedR = result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))



    original.forEach(o => {
      const c = list.find(x => x.position === o.position)
      const r = ratedR.find(x => x.position === o.position)

      c.value = r.position
    })

    cb(list)

    console.log("L", left)
    console.log("R", right)
    console.log(">", ratedR)


    return ratedR
  }


  const startMerge = (arr) => {
    if (arr.length === 1) {
      // return once we hit an array with a single item
      return arr
    }

    const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
    const left = arr.slice(0, middle) // items on the left side
    const right = arr.slice(middle) // items on the right side

    return merge(
      startMerge(left),
      startMerge(right)
    )

  }

  const listCopy = JSON.parse(JSON.stringify(list))
  const r= startMerge(listCopy)
  //cb(r)

}

export default MergeSorter
