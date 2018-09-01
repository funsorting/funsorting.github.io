const MergeSorter = (list, cb) => {

  const merge = (left, right) => {
    const original = left.concat(right)
    //setAsSorting(original)

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



    const mergeL = startMerge(left)
    const mergeR = startMerge(right)

    const merged = mergeL.concat(mergeR)



    const rr = merge(mergeL, mergeR)

    const cc = list
    arr.forEach((a, i) => {
      const c = cc.find(x => x.position === a.position)
      c.value = rr[i].value
      c.isSorting = true
    })

    cb(JSON.parse(JSON.stringify(cc)), cc.find(x => x.isSorting).position)

    list.forEach((x) => x.isSorting = false)

    cb(JSON.parse(JSON.stringify(list)))
    /*

    merged.forEach((m, i) => {
      cc[i].value = m.position
    })

    cb(cc)
    */

    return rr

  }

  const listCopy = JSON.parse(JSON.stringify(list))
  const r= startMerge(listCopy)
  //cb(r)

}

export default MergeSorter
