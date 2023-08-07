const ganner_koli = 'tumi bondhu kala Pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada';
//split().......................
// const line_break_sent = ganner_koli.split('.');//split er vitor bujay dite hbe kivabe vangbe ---->sentence
// console.log(line_break_sent)

// const line_break = ganner_koli.split(' ');//split er vitor bujay dite hbe kivabe vangbe ---->word
// console.log(line_break)

// const line_break_char = ganner_koli.split('');//split er vitor bujay dite hbe kivabe vangbe ---->char
// console.log(line_break_char)


//slice.................kete neya
const part = ganner_koli.slice(5, 12);
console.log(part);

//substring.................kete neya
const part_substring = ganner_koli.substring(5, 12);
console.log(part_substring);
//join
const lines = [
    'Tumi bondhu kala Pakhi ami jeno ki',
    'Bosonto kale tomai bolte pari ni',
    'Kala kala sada sada',
    'Rong jomeche sada kala'
];

const newSong = lines.join('. ')
console.log(newSong)
