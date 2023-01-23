//generate a random number between 1 to 6
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
//selecting dice1.png - dice6.png 
var randomDiceImage = "dice" + randomNumber1 +".png";
//images/dice1.png to dice6.png relative path of the image
var randomImageSource = "Images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomImageSource2 = "images/dice" + randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//if player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Congrats Player 1 you WIN";
}else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Congrats Player 2 you WON this round";

}else {
    document.querySelector("h1").innerHTML = "It's a DRAW"
}