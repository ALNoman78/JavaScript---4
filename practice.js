//  using reverse() method with the original array (it will be change)

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let newArr = arr.reverse();
for (const numNew of arr) {
    console.log(numNew);
}
// console.log(newArr);

// using for of loop

// let numbers = [10, 20, 30, 40, 50, 60, 70];

// let reverse_number = [] //  that's mean empty array

// for(const newNumber of numbers){
//     reverse_number.unshift(newNumber);  // unshift will be redeclare by newArray
// }
// console.log(reverse_number);

//  practice for of loop

let userName = ["Bill", "Elone", "Mark", "Noman"];

let reverseName = [];

for(const x of userName){
    reverseName = x + reverseName ;
}
console.log("The reverse string is ", reverseName)