// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'


let userName =  ['Tom', 'Tim', 'Tin', 'Tik'];

for (const newName of userName) {
    let updateName = `newName ${newName}`
    console.log(updateName);
}