const InsertionSorter = (list, callback) => {
  var len = list.length;
	for (var i = 1; i < len; i++) {
		var tmp = list[i].value; //Copy of the current element.
		/*Check through the sorted part and compare with the number in tmp. If large, shift the number*/
		for (var j = i - 1; j >= 0 && (list[j].value > tmp); j--) {
			//Shift the number
			list[j + 1].value = list[j].value;
      callback(list, j)
		}
		//Insert the copied number at the correct position
		//in sorted part.
		list[j + 1].value = tmp;
    callback(list, i)

	}

  callback(list)
}

export default InsertionSorter
