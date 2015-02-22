function sum_range(end, start) { 

  start = start || 1;	
  var num = (end + start)*((end - start +1)/2)
  return num; 
         
}
// sum_range(7) returns 28
// sum_range(7,3) returns 25


// Default parameters
// This is an experimental technology, part of the Harmony (ECMAScript 6) proposal.
// 
function sum_range(end, start=1) { 

  var num = (end + start)*(end - start +1)/2
  return num; 
         
}