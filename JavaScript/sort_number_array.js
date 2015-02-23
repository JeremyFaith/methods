function sortNumArray(arr) {

	arr = arr.sort(function(a,b) {
	    return a-b;
	  });

	return arr;

}

// sort([2,4,100,1,8,10,5]) returns [1,2,4,5,8,10,100]