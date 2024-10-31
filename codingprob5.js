//color preferences

//this function allows a prompt
const ps = require("prompt-sync");
const prompt =ps();

//alert function
function alert(message){
    console.log(message);
}

let colors = [];

let color = alert("What are your top 3 favorite colors? ");

for (let c = 0; c <= 2; c++){
    let color = prompt(`Enter color ${c + 1}:`);//Prompt user for color
    colors.push(color);//Add the color to the array 
   console.log("Update colors:", colors);//Log the update array
}

console.log("Your favorite colors are:", colors);