// settimeour()
//? syntax => setTimeout

let timer=setTimeout(()=>{
    console.log("Hello World!");
}, 2000);

//! setInterval()=>
//? setInterval(callbackfun,time(ms))
let i=1;
let timeInterval=setInterval(()=>{
    console.log("Task-",i++);

}, 1000);
clearTimeout(timer)







