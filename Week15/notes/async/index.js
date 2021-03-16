const endPoint = "https://ancient-taiga-31359.herokuapp.com/api/houses"; 

const getHouse = () => {
fetch(endPoint)
.then(res=> res.json())
.then(res=> {console.log(res)});
}

getHouse(); 

//async
const getHouse = async() => {
    //only get the promiste
    const resp = fetch(endPoint)

    //get the data
    const resp = await fetch(endPoint)
    //makes the data cleaner by making it into a json.
    const json = await resp.json()
    // fetch(endPoint)
    // .then(res=> res.json())
    // .then(res=> {console.log(res)});
    }