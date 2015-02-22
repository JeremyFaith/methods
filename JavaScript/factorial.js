function factorial(num) { 
  
  if (num <= 0) { return 1; }
  for (var i = num-1; i > 1; i--) {
    num = num * i;
  } 
  return num;          
}

// factorial(num) for num >= 0 
// will set factorial(num) = 1 for num < 0

// factorial(-1) returns 1
// factorial(0) returns 1
// factorial(5) returns 120