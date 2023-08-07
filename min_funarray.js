// function mini(num) {
//     let mini = num[0];
//     for (const i of num) {
//         const current_iteam = i;
//         if (current_iteam < mini) {
//             mini = current_iteam;
//         }
//     }
//     return mini;
// }
// const arr = [12, 7, 9, 20, 4, 2, 3];
// console.log(mini(arr))

function reverseWords(str) {
    const words = str.split(' ');
    const result = [];
    // [ 'I', 'am', 'a', 'good', 'boy' ]
    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i];
        result.push(element);
    }
    const reversed = result.join(' ');
    return reversed;
}


const myString = 'I am a good boy';
reverseWords(myString);