//favnumber
 
//this function allows a prompt
const ps = require("prompt-sync");
const prompt =ps();

let favnum = 8;
let guess;
 
while (true)
{
    guess = parselnt(prompt("guess my favorate number:"));

    if (guess<favnum){
        console.log("Too low!");
    }else if (guess>favnum){
        console.log("Too high!");
    }else{
        console.log("Correct!");
    }
}    
