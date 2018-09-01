const QuickSort = (list, cb) => {
  function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    list.forEach((x) => {
      if(x.position === arr[i].position || x.position === arr[j].position){
        x.isSorting = true
      } else{
        x.isSorting = false
      }
    })
    cb(JSON.parse(JSON.stringify(list)), i)
  }

  const partition = (arr, pivot, left, right) => {
     var pivotValue = arr[pivot].value,
         partitionIndex = left;

     for(var i = left; i < right; i++){
      if(arr[i].value < pivotValue){
        swap(arr, i, partitionIndex);
        partitionIndex++;
      }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
  }

  const quickSort = (arr, left, right) => {
     var len = arr.length,
     pivot,
     partitionIndex;


    if(left < right){
      pivot = right;
      partitionIndex = partition(arr, pivot, left, right);

     //sort left and right
     quickSort(arr, left, partitionIndex - 1);
     quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
  }

  quickSort(list, 0, list.length - 1)
  list.forEach(x => x.isSorting = false)
  cb(JSON.parse(JSON.stringify(list)))
}

export default QuickSort
