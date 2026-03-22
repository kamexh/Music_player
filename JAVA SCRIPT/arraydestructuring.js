//destructing of array
let movies = ["VIKRAM-3","OG","MASTER-2","THUPAKKI 2","KATHI -2","LEO 2","THERI_2"]
console.log(movies);
let [a,b,c,d,e,f,g,h] = movies;
console.log(b);

let hero ={
    name:"vijay",
    age:53,
    job:"actor",
}
console.log(hero);
console.log(hero.name);
//destructure
let {name,age,job}=obj;
console.log(name);