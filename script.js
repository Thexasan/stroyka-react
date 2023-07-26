// //1
// function sumNumbers(array) {
//     const filteredArray = array.filter(item => typeof item === 'number');
//     const sum = filteredArray.reduce((acc, curr) => acc + curr, 0);
//     return sum;
//   }
// console.log(sumNumbers([1,2,3,4,5,'six','eight']));  

// //2
// function isUpperCase(str, n) {
//     return str.charAt(n) ==str.at(n).toUpperCase()
//   }
// console.log(isUpperCase('tasks JS',6))  

// //3
// function getOnlyEvens(array) {
//     const result = array.filter((num, index) => num % 2 === 0 && index % 2 === 0);
//     return result;
//   }
// console.log(getOnlyEvens([1,2,3,4,5]))  

// //4
// function duplicateNums(array) {
//     const duplicates = array.filter((num, index) => array.indexOf(num) !== index);
//     return duplicates.length>0  ? duplicates:null;
//   }
  
//   console.log(duplicateNums([1,2,3,4,5])); 
  
// //5


// function findLarg(array) {
//     const largestNumbers = array.map(elem =>Math.max(...elem));
//     return largestNumbers;
//   }
  
//   console.log(findLarg([[-4, -2, -7,-9], [-4, -5, -6], [-1, -2, -3, -5]]));

  
// function name(arr){
// return arr.map((e)=>{
//     return e%2==0
// })
// }
// console.log(name([1,2,3,4,5]));





function GetVote(obj) {
  // return obj.upvote - obj.downvote;
  return Object.values(obj).reduce((a,b)=>a-b)
}

console.log(GetVote({upvote: 13, downvote: 0}));