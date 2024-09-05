// let message = "I love bangladesh"

// let x = message.split(" ");
// let newX = x.reverse()
// let joint = newX.join(" ")
// console.log(joint);

// how to find a array using array method

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let checkType = Array.isArray(arr)
// console.log(checkType)

// how to concat() two array using this method

// let fruits = ['mango','jackfruit','lichi','cucumber']
// let flowers = ['Rose','Belly','Hibiscus rosa-sinensis']

// let addedArr = fruits.concat( ).concat(flowers)
// console.log(addedArr);

// print a string reverse

// let a = [1, 2, 3, 4, 5, 6];
// let rev = a.reverse()
// console.log(rev);

//  using for of loop

// let a = [1, 2, 3, 4, 5, 6];

// let reverse = [];

// for (const rev of a) {
//     reverse = rev + reverse;
// }
// // let num = Number.reverse // this method isn't working
// console.log(reverse);

//  using for loop toh added sum()

// let a = [10, 20, 30, 40, 50, 60];
// let x = 0;
// for(const sum of a){
//     console.log(sum);
//     x += sum
// }
// console.log(x);


//  if i need 1-120 even number total

// let sum = 0;
// for(let i = 1; i <= 120 ; i++){
//     // console.log(i);
//     if (i % 2 === 0) {
//         sum += i
//         console.log(sum);
//     }
// }

// 1 to 99 all odd number sub total 

let sum = 0;

for(let x = 1; x <= 99 ; x++){
    if(x % 2 !== 0){
        sum += x;
    }
}
console.log(sum); 