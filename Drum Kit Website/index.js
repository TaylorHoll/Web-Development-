//gets the class length of .drum, and declares it to a variable

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//for loop that gets any click and keypress by calling makeSound

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

//call makeSound

    makeSound(buttonInnerHTML);

//call buttonAnimation

    buttonAnimation(buttonInnerHTML);

  });

}


//Detection of keyboard press

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);


});

//Switch function for both when the img is clicked and when the key is pressed.

function makeSound(key) {
  switch (key) {
    case "w":

      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":

      var audio2 = new Audio("sounds/snare.mp3");
      audio2.play();
      break;
    case "s":

      var audio3 = new Audio("sounds/tom-2.mp3");
      audio3.play();
      break;
    case "d":

      var audio4 = new Audio("sounds/tom-3.mp3");
      audio4.play();
      break;
    case "j":

      var audio5 = new Audio("sounds/tom-4.mp3");
      audio5.play();
      break;
    case "k":

      var audio6 = new Audio("sounds/kick-bass.mp3");
      audio6.play();
      break;
    case "l":

      var audio7 = new Audio("sounds/crash.mp3");
      audio7.play();
      break;

    default:
      console.log(key);


  }

}


//Sets the img to be darker when pressed and uses setTimeout to make it go away when not pressed

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}


/*

******************************************************************************************

***Methods***
Use these when only needing a single object with nothing in common

var bellBoy1 = {
  name: "Timmy",
  age: 19,
  hasWorkPermit: true,
  languages: ["French"],
  moveSuitcase: function() {
    alert("May i take your suitcase?");
    pickUpSuitcase();
    move();
  }
};


******************************************************************************************

Call Method    always using the dot notation when using the call method

bellBoy1.moveSuitcase();

******************************************************************************************


***Constructor function***

used in order to declare a new object easilly without having to write a ton of functions.

 function BellBoy(name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitcase = function() {
    alert("May i take your suitcase?");
    pickUpSuitcase();
    move();
  }
}

******************************************************************************************


***Bad way of handeling multiple objects of the same type***

querySelectorAll for the click alert and calling a button

 document.querySelectorAll("button")[0].addEventListener("click", handleClick);   //no () because it would call function right away. Video 3 timestamp late in 6 minutes
 document.querySelectorAll("button")[1].addEventListener("click", handleClick);
 document.querySelectorAll("button")[2].addEventListener("click", handleClick);
 document.querySelectorAll("button")[3].addEventListener("click", handleClick);
 document.querySelectorAll("button")[4].addEventListener("click", handleClick);
 document.querySelectorAll("button")[5].addEventListener("click", handleClick);
 document.querySelectorAll("button")[6].addEventListener("click", handleClick);

 document.querySelectorAll("button")[6].addEventListener("click", function () { //instead of calling a function without (), it can be done right there in the statement by creating the funtion in it.
 alert("i got clicked");


});

function handleClick() {              //function handle click for lines 4-10
alert("I got clicked");

******************************************************************************************

***Callback Function***

document.addEventListener("keypress", respondToKey(event));

function respondToKey(event) {
  console.log("Key pressed.")
}













*/
