var Calculator = {
  add: function(a, b) {
    if (typeof(a) !== "number" || typeof(b) !== "number") {
      throw("Better inputs please :)");
    }
    return(a + b);
  },
  multiply: function(a, b) {
    return(a * b);
  },
  division: function(a,b){
    return(a / b);
  },
  substraction: function(a, b){
    return(a - b);
  },
  raiz_cuadrada: function(x){
    return(Math.sqrt(x));
  },
  exponential: function(a, b){
    return(Math.pow(a, b));
  },
}

console.log(Calculator.add(2,3) === 5);
