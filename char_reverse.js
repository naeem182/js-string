////by 
function reverseWords(str) {

    let reversed = ' ';

    for (let i = str.length - 1; i >= 0; i--) {
        const element = str[i];
        reversed = reversed + element;
        // console.log(element, reversed);

    }

    return reversed;
}


const myString = 'I am a good boy';
console.log(reverseWords(myString));