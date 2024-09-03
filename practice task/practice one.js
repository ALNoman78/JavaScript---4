// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']

// solution one using for of loop

let fruits = ["Orange", "Yellow", "Green", "Blue", "Red"]

let reverse = [];

for(const revFruits of fruits){
    reverse = revFruits + reverse
}
console.log(reverse)

//  using reverse () method 

let fol = ["Orange", "Yellow", "Green", "Blue", "Red"]

let newFol = fol.reverse()
console.log(newFol);