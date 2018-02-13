const SelectionSorter = (items, cb) => {
	var length = items.length;
	for (var i = 0; i < length - 1; i++) {
		//Number of passes
		var min = i; //min holds the current minimum number position for each pass; i holds the Initial min number
		for (var j = i + 1; j < length; j++) { //Note that j = i + 1 as we only need to go through unsorted array
			if (items[j].value < items[min].value) { //Compare the numbers
				min = j; //Change the current min number position if a smaller num is found
			}
		}
		if (min != i) {
			//After each pass, if the current min num != initial min num, exchange the position.
			//Swap the numbers
			var tmp = items[i];
			items[i] = items[min];
			items[min] = tmp;

      items.forEach((x) => {
        if(x.position === i || x.position === min){
          x.isSorting = true
        } else{
          x.isSorting = false
        }
      })

      cb(items)
		}
	}
}

export default SelectionSorter
