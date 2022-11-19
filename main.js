var randomNum = Math.floor(Math.random()*6)+1;
var randomDice="images/dice" +randomNum +".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDice );


var randomNum2 = Math.floor(Math.random()*6)+1;
var randomDice2 = "images/dice"+randomNum2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDice2);

if (randomDice2>randomDice){
    document.querySelector("h1").innerHTML="player 2 won!";
} else if(randomDice>randomDice2){
        document.querySelector("h1").innerHTML="player 1 won!"
}else if (randomDice===randomDice2){
       document.querySelector("h1").innerHTML="draw match" 
}