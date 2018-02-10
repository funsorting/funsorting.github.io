function merge(left, right, cb)
{
    var result = [];

    while (left.length && right.length) {
        if (left[0].value <= right[0].value) {
            result.push(left.shift());
          //  cb(result)
        } else {
            result.push(right.shift());
          //  cb(result)
        }
    }

    while (left.length) {
        result.push(left.shift());
      //  cb(result)
      }

    while (right.length) {
        result.push(right.shift());
        //cb(result)
      }

      cb(result)
    return result;
}

const MergeSorter = (arr, cb) => {
    if (arr.length < 2)
        return arr;

    var middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);

    return merge(MergeSorter(left, cb), MergeSorter(right, cb), cb);
}

export default MergeSorter
