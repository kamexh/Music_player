//? 1. JSON.parse(string)
//! JSON String
let jsonstring=["name" ,"KAMESH","age","20" ]
console.log(jsonstring);

//! JSON string convert it into the JS Object
let jsonobject=JSON.parse(jsonstring);
console.log(jsonObject);

// 2.JSON.stringify(object)=>
    let employee={
        empName:"KAMESH",
        empid:101,
        esalary:50000,
    };
    console.log(employee);