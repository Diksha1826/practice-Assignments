console.log("tic tac toe")
let music = new Audio("music.mp3") 
let audioTurn = new Audio("ting.mp3") 
let gameover = new Audio("gameover.mp3") 
let turn = "X" 
let Gameresult = false ;

// function to change the turn
const changeTurn=()=>{
    return turn === "X" ? "0" : "X" ;
}

// function to checkfor a win
const checkwin =()=>{
let boxtexts = document.getElementsByClassName("boxtext");

    let wins = [
        [0 , 1 , 2 , -2.5 , 4.8 , 0] ,
        [3 , 4 , 5 , -2.5 , 14.9 , 0] ,
        [6 , 7 , 8 , -2.5 , 25 , 0] ,
        [0 , 3 , 6  , -12.55 , 15 , 90] ,
        [1 , 4 , 7 , -2.5 , 15 , 90] ,
        [2 , 5 , 8  , 7.6 , 15 , 90] , 
        [0 , 4 , 8 , -2.5 , 15 , 45] ,
        [2 , 4 , 6 , -2.5 , 15 , 135] ,
    ] 
    wins.forEach( elem =>{
        if((boxtexts[elem[0]].innerText === boxtexts[elem[1]].innerText) && (boxtexts[elem[2]].innerText === boxtexts[elem[1]].innerText) && (boxtexts[elem[0]].innerText !== "" ) ){
            document.querySelector('.info').innerText = boxtexts[elem[0]].innerText + " Won";
            Gameresult = true ;
            document.querySelector('img').style.width = "170px" ;
            document.querySelector(".line").style.width = "35vw" ;
            document.querySelector(".line").style.transform = `translate(${elem[3]}vw , ${elem[4]}vw) rotate(${elem[5]}deg)` ;

        }

    })

}


// game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
let boxtext = element.querySelector(".boxtext");
element.addEventListener('click' , ()=>{
    if(boxtext.innerText === ''){
        boxtext.innerText = turn ;
        turn = changeTurn();
        audioTurn.play();
        checkwin() ;
        if(!Gameresult){
            document.getElementsByClassName("info")[0].innerText = "Turn for -" + turn ;
        }
    }
})
});

//function to reset game 
let reset = document.getElementById("reset")

reset.addEventListener('click' , ()=>{
let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach((elem)=>{
        elem.innerText = ""
    })
    Gameresult = false ;
    document.getElementsByClassName("info")[0].innerText = "Turn for -" + " X" ;
    document.querySelector('img').style.width = "0px" ;
    document.querySelector(".line").style.width = "0px" ;


})
