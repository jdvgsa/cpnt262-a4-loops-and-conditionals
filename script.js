/* Using for loop to do draw 2 shapes challenge */

//loop to show square

let mySquare = "";
for(let i=0;i<4;i++){
  /* console.log("**"); this shows a square shape in consolelogs but,
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

// for the spaces
  for(let y=0;y<5-x;y++){
  myPyramid += " ";
  }
  // for my stars
  for(let z=0;z<=x;z++){
    myPyramid += "* ";
  }
  // create a new line for loop"
  myPyramid += "\n";
}


document.querySelector("#myPyramidOne").innerText = myPyramid;