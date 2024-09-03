// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:

// [12, 98, 76, 46]

//  using for of loop

let numbers = [12, 98, 5, 41, 23, 76, 46];


for(let num of numbers){
    if(num % 2 === 0){
        console.log("The even number is ", num);
    }
}

// console.log(numbers);