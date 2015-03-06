function permutation(num) { 
 
  final = [[1]];
  
  for(var k = 1; k < 4; k++) {
    
    arr = final;
    final = [];

    for(var j =0; j < arr.length; j++) {

      for(var i = 0; i < arr[0].length+1; i++) {

        temp = arr[j].slice(0,i).concat(arr[0].length+1).concat((arr[j].slice(i,arr[0].length)));

        final.push(temp);

      }// for i loop

    }// for j loop 
      
  }// for k loop
  
  return final; 
  
} 