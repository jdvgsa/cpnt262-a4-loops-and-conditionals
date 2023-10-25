/* Using for loop to do draw 2 shapes challenge */

//loop to show square

let mySquare = "";
for(let i=0;i<4;i++){
  /* console.log("**"); this shows a square shape in consolelogs but,
   you need to create a new line otherwise it will just show as repeated stars on the html */
  mySquare += "**";
  // "\n" syntax creates a new line
  mySquare += "\n";
}

document.querySelector("#mySquareOne").innerText = mySquare;