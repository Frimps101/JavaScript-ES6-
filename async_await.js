const apiUrl = "https://api.github.com/users"

// function getTop100Campers(){
//     fetch(apiUrl)
//     .then((res)=> res.json())
//     .then((data) => console.log(data))
//     .catch((err)=>console.log("failed"))
// }

async function getTop100Campers (){
    const response = await fetch(apiUrl);
    const json = await response.json();

    console.log(json[0])
}

getTop100Campers();