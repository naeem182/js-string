// //with condition function................
// function max_num(jim, dela, chinku) {

//     if (jim > dela && jim > chinku) {
//         console.log('Jim will get the cake');
//     }
//     else if (dela > jim && dela > chinku) {
//         console.log('Dela will eat cake in this bela');
//     }
//     else {
//         console.log('Chinku will get the cake');
//     }
// }


// console.log(max_num(34, 75, 63))

// with condition function..............
// function max_num(jim, dela, chinku) {

//     if (Math.max(jim, dela, chinku) === jim) {
//         return 'Jim will get the cake';
//     }

//     else if (Math.max(jim, dela, chinku) === dela) {
//         return 'dela will get the cake';
//     }
//     else {
//         return 'chinku will get the cake';
//     }

// }


// console.log(max_num(64, 75, 93))

//............return function with array


function findLargest(x) {

    let largest = x[0];

    for (let i = 0; i < x.length; i++) {
        const index = i;

        const element = x[i];

        if (element > largest) {
            largest = element;
        }

    }

    // for(let i of x){
    //     const element =i

    //     if(element > largest ){
    //         largest = element
    //     }
    // }

    return largest;

}


const arr = [56, 12, 7, 9, 20, 4, 2, 3];
console.log(findLargest(arr))
