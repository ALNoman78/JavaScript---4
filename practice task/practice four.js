// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

// using reverse() method

let statement = 'I am a hard working person';

let newStatement = statement.split(" ")
console.log(newStatement);

let reversed = newStatement.reverse();
let e = reversed.join(" ")
console.log(e);

// for (const e of newStatement) {
//     reversed =  e + newStatement;
    
// }
// console.log(reversed);



// second practice you have to reversed the word you laugh i

let text = "i live in bangladesh"
// there i split the text of array
let s = text.split(" ")
//  ae 35 number line theke ami split kora text take reversed kore diche
let rev_text = s.reverse()
// console.log(rev_text);

let j = rev_text.join(" ")
console.log(j);
