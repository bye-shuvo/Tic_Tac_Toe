console.log("Welcome to Tic Tac Toe !!!");

let music = new Audio("very-lush-and-swag-loop-74140.mp3");
let buttonPress = new Audio("click-47609.mp3");
let AudioTurn = new Audio("90s-game-ui-2-185095.mp3");
let win = new Audio("90s-game-ui-11-185104.mp3");

let turn = "X";

let gameover = false ;

let bgm = false ;
const bgMusic = () => {
    document.querySelector("#play").addEventListener('click' , () => {
        buttonPress.play();
        if(!bgm){
        music.play();
        bgm = true;
    }
    else{
        music.pause();
        bgm = false;
    }
    })
}
bgMusic();

const changeTurn = () => {
    return turn === "X" ? "0": "X";
}

const checkWin = () => {
    let boxitem = document.getElementsByClassName("boxitem");
    let wins = [
        [0 , 1 , 2],
        [3 , 4 , 5],
        [6 , 7 , 8],
        [0 , 3 , 6],
        [1 , 4 , 7],
        [2 , 5 , 8],
        [0 , 4 , 8],
        [2 , 4 , 6]
    ]
    wins.forEach(element => {
        if((boxitem[element[0]].innerText === boxitem[element[1]].innerText) && (boxitem[element[2]].innerText === boxitem[element[1]].innerText) && (boxitem[element[0]].innerText !== "")){
            document.getElementsByClassName('text')[0].innerText = boxitem[element[0]].innerText + "  has won !" ;
            gameover = true;
            win.play();
            document.querySelector(".game_info").getElementsByTagName("img")[0].style.width = "7rem";
        }
    })
}

const reset = () => {
    let boxitem = document.getElementsByClassName("boxitem");
    let arr = Array.from(boxitem);
    let reset = document.querySelector("#Reset");

    reset.addEventListener('click' , () => {
        buttonPress.play();
        arr.forEach(element => {
            if(element.innerText !== ''){
                element.innerText = '';                
            }
            turn = "X";
            document.getElementsByClassName("text")[0].innerText = "Turn for " + turn;
            document.querySelector(".game_info").getElementsByTagName("img")[0].style.width = "0vw";
        })
    })
}
reset();

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxitem = element.querySelector(".boxitem");
    element.addEventListener('click', ()=>{
        if(boxitem.innerText === ''){
            boxitem.innerText = turn;
            turn = changeTurn();
            AudioTurn.play();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("text")[0].innerText = "Turn for " + turn;
            }
        }
    })
})
