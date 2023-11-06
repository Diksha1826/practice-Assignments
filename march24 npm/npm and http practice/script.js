// import { v4 as uuidv4 } from 'uuid'

// console.log("im working")

// let user1 = {
//     name: "diksha",
//     id: uuidv4(),
// }
// let user2 = {
//     name: "radhe",
//     id: uuidv4(),
// }

// console.log(user1 , " ----- " , user2 )

function updatefunc(){
    let id = document.querySelector("input").value

    let data = {
        name : "Nihal" ,
        city : "uttra"
    }
    data = JSON.stringify(data);
    fetch(`http://localhost:3000/users/${id}` ,{
        method : "PATCH" ,
        header : {
            'Content-Type' : 'application/json'
        } ,
        body : data 
    }) 
    .then((res)=> res.json())
    .then((res)=> console.log(res))
    .catch((err) => console.log(err))
// console.log(id)
}
// function dltfunc(){
//     let id = document.querySelector("input").value 
// console.log(id)
// }