let n1 = 10;
let n2 = 20;
console.log(n1, n2);
//with temp
//let temp = n1;
// n1 = n2;
// n2 = temp;

//with array...
// [n1, n2] = [n2, n1]
//with sum
let add = n1 + n2;
n1 = add - n1;
n2 = add - n1;
console.log(n1, n2)