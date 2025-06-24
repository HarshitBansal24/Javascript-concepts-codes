
//!write a program to print fibonacci series
// let a=0;
// let b=1;
// let c;
// function fibo(n){
//     console.log(a);
//     console.log(b);
//     for(let i=1;i<=n;i++){
//     c=a+b;
//     console.log(c)
//     a=b;
//     b=c;
//     }
// }
// fibo(8);


//!find the missing number 
// let arr=[1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(arr.includes(3));
// });


//!Reverse Array
// let arr=[10,20,30,40];
// console.log(arr.reverse());


//!find the duplicate element in an array
// let arr=[1,2,2,3,4,4,5];
// let arr2=arr.filter((val,index,self)=>{
//     return self.indexOf(val)!==index;
// });
// console.log(arr2);

//*OR

/*const findDuplicateElement = (arr)=>{
    let sortedarray=arr.slice().sort();
    let result=[];
    for(let i=0; i<sortedarray.length-1;i++){
        if(sortedarray[i+1]===sortedarray[i]){
            result.push(sortedarray[i]);
        }
    }
    return result;
}
let arr = [1,2,3,3,4,5,6,6,7,8];
console.log(`The duplicate elements in ${arr} are ${findDuplicateElement(arr)}`);*/



//!Write a func that takes an array and find the prime number
/*let arr=[1,2,3,4,5,6,7];
arr.forEach((val)=>{
    let count=0;
    for(let i=0;i<=arr.length-1;i++){
    if(val%i===0){
        count++;
    }
}
if(count===2){
    console.log(`${val} is a prime number`);
}
else{
    console.log(`${val} is not a prime number`);
}
});*/



//!Print char which are not repeating

// let str = "Il love javascript";
// let flag = false;

// let str1 = str.toLowerCase().split("");

// for(let i=0;i<str1.length;i++){
//     flag=false;
//     for(let j=i+1;j<str1.length;j++){
//         if(str1[i]==str1[j]){
//             flag=true
//             break;
//         }
//     }
//     if(flag==false){
//         console.log(str1[i]);
//         break;
//     }
// }


// function firstNonRepeatedChar(str) {
//     const charCount = {};
  
    // Count each character
//     for (let char of str) {
//       charCount[char] = (charCount[char] || 0) + 1;
//     }
  
    // Find the first character with a count of 1
//     for (let char of str) {
//       if (charCount[char] === 1) {
//         return char;
//       }
//     }
  
//     return null; // or return 'No non-repeating character found'
//   }
  
// Example usage:
//   const input = "il loove javascript";
//   const result = firstNonRepeatedChar(input);
//   console.log(`First non-repeated character is: ${result}`);



//!Print repeating characters in a string
// let str = "javascript"

// for(let i=0;i<str.length;i++){
//     if(str.indexOf(str[i]) != str.lastIndexOf(str[i])){
//         console.log(`${str[i]} is repeating`);
//     }
// }



//!Print first non repeating character in a string
// let str = "javascript"

// for(let i=0;i<str.length;i++){
//     if(str.indexOf(str[i])===str.lastIndexOf(str[i])){
//         console.log(`${str[i]} is non repeating`);
//         break;
//     }
// }



//!Print last non repeating character in a string
// let str = "javascriptt"

// for(let i=str.length-1;i>=0;i--){
//     if(str.indexOf(str[i])===str.lastIndexOf(str[i])){
//         console.log(`${str[i]} is non repeating`);
//         break;
//     }
// }



//!Find the maximum sum of subarray
// let arr = [1, -1, 2, 3, -2];
// let msum = arr[0];  
// let csum = arr[0];  
// for (let i = 1; i < arr.length; i++) {  
//     if (csum + arr[i] > arr[i]) { 
//         csum = csum + arr[i]; 
//     }
//     else {
//         csum = arr[i];
//     }

//     if (csum > msum) {
//         msum = csum;
//     }
// }
// console.log(msum);


//*OR

/*let nums = [1,-2,3,-1,-2,5,1];

function findsubarray(nums){
    let maxsum = nums[0];
    for(let i=0;i<nums.length;i++){
        let currentsum = 0;
        for(let j=i;j<nums.length;j++){
            currentsum = currentsum + nums[j];
            if(currentsum>maxsum){
                maxsum = currentsum;
            }
        }
    }
    return maxsum;
}
console.log(findsubarray(nums));*/



//! Find the missing number in an array
// let arr=[1,2,3,4,5];
// console.log(arr.includes(4)); //true

//OR

// let arr2=[2,3,6,5,8,9];
// for(let i=0;i<arr2.length;i++){
//     if(5===arr2[i]){
//        console.log("yes");
//     }
// }


//!Write a function that takes number and count the digits
// const countdigit=(digit)=>{
//     let count=0;
//     while(digit>0){
//         digit = Math.floor(digit/10);
//         count++;
//     }
//     return count;
// }
// console.log(countdigit(23342));


//!write a function that takes number and return reverse of the number

// const reversenumb = (numb) => {
//     let res = 0;
//     while (numb > 0) {
//         let rem = numb % 10;
//         res = (res * 10) + rem;
//         numb = Math.floor(numb / 10);
//     }
//     return res;
// }
// console.log(reversenumb(234));


//!Find the number of words in string
// let str="hey, follow my github!";
// let words=str.split(" ");
// console.log(words.length);


//!Remove given char from string
// let str="harshit";
// let chars=str.split('');
// chars.splice(5,1);              //here we remove 'i' from "harshit"
// console.log(chars.join(''));    //harsht


//!Count the vowels in string
// function vowelCount(str){
//  let chars=str.toLowerCase();
//  let count=0;
//    for(let i=0;i<chars.length;i++){
//        if(chars[i]=== 'a' || chars[i]=== 'e' || chars[i]=== 'i' || chars[i]=== 'o' || chars[i]=== 'u'){
//              count++;
//        }
//      }
//      console.log(count);
// }
// vowelCount("Im fine");



//!PRIME NUMBER
// function PrimeNumb(n){
//     let count=0;
//     for(let i=1;i<=n;i++){
//         if(n%i==0){
//             count++;
//         }
//     } 
//         if(count===2){
//             console.log(`${n} is a prime number`);
//         }else{
//             console.log(`${n} is not a prime number`);
//         }
    
// }
// PrimeNumb(8); 


//or

// function isPrime(num) {
    // Handle edge cases
//     if(num <= 1) return false;
//     if(num <= 3) return true;
    
    // Check for divisibility up to square root
//     for(let i = 2; i <= Math.sqrt(num); i++) {
//         if(num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// isPrime(17); // Output: true
// isPrime(4);  // Output: false