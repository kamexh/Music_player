console.log("Rest Parameter");

//? syntax to create frist parameter
// ..variableName
function getnumbers(...num){ ///...num ->rest parameter 
    console.log("numbers:",num);
}

getnumbers(10,20,30,40,50)



///Example-2(rest parameter)

function getnames(...name){
    console.log("name:", name)
}

getnames("kamesh", "dinesh", "hari")