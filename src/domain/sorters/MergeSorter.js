const MergeSorter = (list, cb) => {

  const setDiferrence = (original, sorted) => {
    console.log("O", JSON.stringify(original))
    console.log("S", JSON.stringify(sorted))

    sorted.forEach((s, i) => {
      const o = original[i]

      const l1 = list.findIndex(x => x.position === o.position)
      const l2 = list.findIndex(x => x.position === s.position)

      list[l1].value = s.value
      list[l2].value = o.value

    })


    cb(list)
  }

  const merge = (left, right) => {
      var result = [];

      const original = left.concat(right)

      //setPosition(left, right)

      while (left.length && right.length) {
          if (left[0].value <= right[0].value) {
              result.push(left.shift());
          } else {
              result.push(right.shift());
          }
      }



      while (left.length) {
          result.push(left.shift());
        }

      while (right.length) {
          result.push(right.shift());
        }

        setDiferrence(original, result)
        return result;
  }


  const startMerge = (arr) => {
    if (arr.length < 2)
        return arr;

    var middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);

    return merge(startMerge(left), startMerge(right));
  }

  const listCopy = JSON.parse(JSON.stringify(list))
  startMerge(listCopy)

}

export default MergeSorter
