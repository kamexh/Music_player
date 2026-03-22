//! getElementByClassName("classNAme")

let paraElements=document
console.log(paraElements);
console.log(Array.isArray(paraElements));

//! Style
// ParaElemnts.Style>color="blue";//undefined

//! First convert html collection into an array
//? 1. Array.from(htmlcollection)
let newArray=Array.from(paraElements);
console.log(newArray);
console.log(Array.isArray(newarray));

//? By using spread operator(...varName)
let newArray2 =[...paraElements];
console.log(newArray2);
console.log(Array.isArray(newArray2));

//! Now we sucessfully convert the collections into an arrat
//! so you can iterate on the array

newArray.map((ele,index)=>{
    ele.style.color="blue";

    if(index==1){
        ele.style.backgroundcolor="yellow";
    }
});



