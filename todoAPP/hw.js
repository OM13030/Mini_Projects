// let arr = [1,2,3,4,5,6,2,3];
// for(let i = 0;i<=arr.length;i++){
//     if(arr[i] == 2){
//         arr.splice(i,1);
//     }
// }

// console.log(arr);

// let num = 2829237;
// let count = 0;

// let x = num;

// while(x>0){
//     count++;
//     x = Math.floor(x/10);
    
// }
// console.log(count);



// let num = 287;
// let sum = 0;
// let x = num;
// for(let i = 0;i<=num;i++){

//     let ld = x % 10;
//     sum = sum + ld;
//     x = Math.floor(x/10);
    

// }
// console.log(sum);


let arr = [2,4,6,8,676,5,5,43,];
let largest = 0;
for(let i = 0;i<=arr.length;i++){
    if(largest<arr[i])
    {
        largest = arr[i];
    }
}
console.log(largest);