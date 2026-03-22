console.log("spread parameter");
//Array
let arr1=[];
console.log("array 1:",arr1);
const arr2=[40,70,80];
console.log("array 2:",arr2);

//spread operation
// syntax ->...variable
arr1=[10,20,30,40,50 , ...arr2];
console.log(arr1);



//object(spread parameter)
let obj1={
    name:"kamesh",
    age:"20",
}
console.log(obj1);

// let obj2={
//     city:"chennai",
//     phone:"number",
// }
// console.log(obj2)

//...obj operator (spreadoperator)
let obj2={...obj1, city:"chennai", phhno:"8248292575"}
console.log(obj2);