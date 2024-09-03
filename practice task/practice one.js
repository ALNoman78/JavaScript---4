// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']

// solution one using for of loop

let fruits = ["Orange", "Yellow", "Green", "Blue", "Red"];

let reverse = [];

for (const revFruits of fruits) {
  reverse = revFruits + reverse;
}
console.log(reverse);

//  using reverse () method

let fol = ["Orange", "Yellow", "Green", "Blue", "Red"];

let newFol = fol.reverse();
console.log(newFol);

// second time practice

let number = [2, 3, 4, 5, 6];

let reversed = [];
for(const rev of number){
    reversed = rev + reversed
}
console.log(reversed);