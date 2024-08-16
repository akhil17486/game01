let buttons=document.querySelectorAll("button");
let button1=buttons[0];
let button2=buttons[1];
let button3=buttons[2];
let button4=buttons[3];
let button5=buttons[4];
let button6=buttons[5];
let button7=buttons[6];
let button8=buttons[7];
let button9=buttons[8];
let player=true;
let a=0;
let w = document.querySelector(".popup");
let result=document.querySelector(".result");
let reset=document.querySelector(".reset");

function checkwin(){
    tie();
    if(button1.textContent=="X"&&button2.textContent=="X"&&button3.textContent=="X"||button1.textContent=="O"&&button2.textContent=="O"&&button3.textContent=="O"){
        var audio = new Audio('game_over.wav');
        audio.play();
        result.innerText=button1.textContent;
        w.style.visibility = "visible";
        
    }
    else if(button4.textContent=="X"&&button5.textContent=="X"&&button6.textContent=="X"||button4.textContent=="O"&&button5.textContent=="O"&&button6.textContent=="O"){
        var audio = new Audio('game_over.wav');
        audio.play();
        result.innerText=button4.textContent;
        w.style.visibility = "visible";
    }
    else if(button7.textContent=="X"&&button8.textContent=="X"&&button9.textContent=="X"||button7.textContent=="O"&&button8.textContent=="O"&&button9.textContent=="O"){
        var audio = new Audio('game_over.wav');
        audio.play();
        result.innerText=button7.textContent;
        w.style.visibility = "visible";
    }

    else if(button1.textContent=="X"&&button4.textContent=="X"&&button7.textContent=="X"||button1.textContent=="O"&&button4.textContent=="O"&&button7.textContent=="O"){
        var audio = new Audio('game_over.wav');
        audio.play();
        result.innerText=button1.textContent;
        w.style.visibility = "visible";
    }
    else if(button2.textContent=="X"&&button5.textContent=="X"&&button8.textContent=="X"||button2.textContent=="O"&&button5.textContent=="O"&&button8.textContent=="O"){
        var audio = new Audio('game_over.wav');
        audio.play();
        result.innerText=button2.textContent;
        w.style.visibility = "visible";
    }
    else if(button3.textContent=="X"&&button6.textContent=="X"&&button9.textContent=="X"||button3.textContent=="O"&&button6.textContent=="O"&&button9.textContent=="O"){
        var audio = new Audio('game_over.wav');
        audio.play();
        result.innerText=button3.textContent;
        w.style.visibility = "visible";
    }
    else if(button1.textContent=="X"&&button5.textContent=="X"&&button9.textContent=="X"||button1.textContent=="O"&&button5.textContent=="O"&&button9.textContent=="O"){
        var audio = new Audio('game_over.wav');
        audio.play();
        result.innerText=button1.textContent;
        w.style.visibility = "visible";
    }
    else if(button3.textContent=="X"&&button5.textContent=="X"&&button7.textContent=="X"||button3.textContent=="O"&&button5.textContent=="O"&&button7.textContent=="O"){
        var audio = new Audio('game_over.wav');
        audio.play();
        result.innerText=button3.textContent;
        w.style.visibility = "visible";
    }else tie();

}
function tie(){
    if(button1.textContent!=""&&button2.textContent!=""&&button3.textContent!=""&&button4.textContent!=""&&button5.textContent!=""&&button6.textContent!=""&&button7.textContent!=""&&button8.textContent!=""&&button9.textContent!=""){
        var audio = new Audio('game_over.wav');
        audio.play();
        result.innerText="---It's a tie!----";
        w.style.visibility = "visible";
    }
}


button1.onclick=()=>{
    var audio = new Audio('pick-92276.mp3');
    audio.play();
if(button1.innerText=="") {
    tie();
if(player==true) {
button1.innerText="O";
player=false;
}
else {
button1.innerText="X";
player=true;
}
checkwin();
}
}
button2.onclick=()=>{
    var audio = new Audio('pick-92276.mp3');
    audio.play();
if(button2.innerText=="") {
    tie();
if(player==true) {
button2.innerText="O";
player=false;
}
else {
button2.innerText="X";
player=true;
}
checkwin();
}

}
button3.onclick=()=>{
    var audio = new Audio('pick-92276.mp3');
    audio.play();
if(button3.innerText=="") {
    tie();
if(player==true) {
button3.innerText="O";
player=false;
}
else {
button3.innerText="X";
player=true;
}
checkwin();
}
}
button4.onclick=()=>{
    var audio = new Audio('pick-92276.mp3');
    audio.play();
if(button4.innerText=="") {
    tie();
if(player==true) {
button4.innerText="O";
player=false;
}
else {
button4.innerText="X";
player=true;
}
checkwin();
}
}
button5.onclick=()=>{
    var audio = new Audio('pick-92276.mp3');
    audio.play();
if(button5.innerText=="") {
    tie();
if(player==true) {
button5.innerText="O";
player=false;
}
else {
button5.innerText="X";
player=true;
}
checkwin();
}
}
button6.onclick=()=>{
    var audio = new Audio('pick-92276.mp3');
    audio.play();
if(button6.innerText=="") {
    tie();
if(player==true) {
button6.innerText="O";
player=false;
}
else {
button6.innerText="X";
player=true;
}
checkwin();
}
}
button7.onclick=()=>{
    var audio = new Audio('pick-92276.mp3');
    audio.play();
if(button7.innerText=="") {
    tie();
if(player==true) {
button7.innerText="O";
player=false;
}
else {
button7.innerText="X";
player=true;
}
checkwin();
}
}
button8.onclick=()=>{
    var audio = new Audio('pick-92276.mp3');
    audio.play();
if(button8.innerText=="") {
    tie();
if(player==true) {
button8.innerText="O";
player=false;
}
else {
button8.innerText="X";
player=true;
}
checkwin();
}
}
button9.onclick=()=>{
    var audio = new Audio('pick-92276.mp3');
    audio.play();
if(button9.innerText=="") {
    tie();
if(player==true) {
button9.innerText="O";
player=false;
}
else {
button9.innerText="X";
player=true;
}
checkwin();
}
}
let newgame=document.querySelector(".newgame");
newgame.onclick=()=>{

    var audio = new Audio('new_game.wav');
    audio.play();
    
    button1.innerText="";
    button2.innerText="";
    button3.innerText="";
    button4.innerText="";
    button5.innerText="";
    button6.innerText="";
    button7.innerText="";
    button8.innerText="";
    button9.innerText="";
    player=true;
    w.style.visibility = "hidden";
};
reset.onclick=()=>{
    var audio = new Audio('new_game.wav');
    audio.play();
    button1.innerText="";
    button2.innerText="";
    button3.innerText="";
    button4.innerText="";
    button5.innerText="";
    button6.innerText="";
    button7.innerText="";
    button8.innerText="";
    button9.innerText="";
    player=true;

}