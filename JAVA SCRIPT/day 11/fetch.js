async function fetchdata() {
    let response= await fetch("https://fakestoreapi.com/products");
    console.log(response);

    let datas=await response.json()
    console.log(datas);  
}
fetchdata()