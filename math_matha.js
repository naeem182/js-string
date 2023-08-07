//power
const result = Math.pow(2, 5);
console.log("2 power 5:", result)

//abs.........(-)ignore/modulas
let n1 = 20;
let n2 = 28;
const gap = Math.abs(n1 - n2);
///console.log(gap);
if (gap < 5) {
    console.log('you guys can be friends');
}
else {
    console.log('you guys stay apart');
}

// ----------------
//  
// ------------------
const number = 45.451245;
const roundNumber = Math.round(number);
console.log(roundNumber);
const result2 = Math.ceil(2.00001);//uporrer ta nibe
const result3 = Math.floor(2.00001);// niser ta nibe
console.log(result2);
console.log(result3);
//
// ------------------
//  Random......elomelo value dibe mne akekber akek ta

// console.log(Math.random() * 100);
// //rounder random

// console.log(Math.round(Math.random() * 100));
for (let i = 0; i < 20; i++) {
    const random = Math.round(Math.random() * 6);
    console.log(random);
}