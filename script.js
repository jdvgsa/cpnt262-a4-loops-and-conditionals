/* Using for loop to do draw 2 shapes challenge */

// this is a for loop to show my first shape which is a square.
// declaring variables
let mySquare = "";
for(let i=0;i<4;i++){
  /* console.log("********"); this shows a square shape in consolelogs but,
   you need to create a new line otherwise it will just show as repeated stars on the html */
  mySquare += "********";
  // "\n" syntax creates a new line
  mySquare += "\n";
}

document.querySelector("#mySquareOne").innerText = mySquare;

// loop to show pyramid

let myPyramid = "";

// indicates line levels
for(let x=0;x<5;x++){ 

// for the spaces so that stars are spaced out
  for(let y=0;y<5-x;y++){
  myPyramid += " ";
  }
  // for my stars
  for(let z=0;z<=x;z++){
    myPyramid += "* ";
  }
  // create a new line for loop so that all the stars aren't show in the same line
  myPyramid += "\n";
}

document.querySelector("#myPyramidOne").innerText = myPyramid;

/* Challenge #2 Reverse  a string using loop*/
let myString = 'abcde'; // string length is 5, last letter of string is in index 4

// console.log(myString);
// console.log(myString[4]);

let myFinalAnswer = ""; // should show "e d c b a"
let lengthOfString = myString.length;
  for(let i=myString.length-1;i>=0;i--){
  myFinalAnswer += myString[i];
  // console.log(myFinalAnswer);

}

document.querySelector("#myReversedString").innerText = myFinalAnswer;

