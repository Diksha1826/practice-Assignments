import Store from "./mtstore.js";
import { reducer } from "./myreducer.js";

const store = new Store(reducer , {
    count: 0 ,
});


let inc = document.getElementById("incCounter");
let dec = document.getElementById("decCounter");
let counter = document.getElementById("counterValue");
counter.innerText = store.getState().count ;

inc.addEventListener("click" ,function(){
    store.dispatch({
        type: "INCREMENT" 
    })
    counter.innerText = store.getState().count ;
})

dec.addEventListener("click" , function(){
    store.dispatch({
        type: "DECREMENT"
    })
    counter.innerText = store.getState().count 
})