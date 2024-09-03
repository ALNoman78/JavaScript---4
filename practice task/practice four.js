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