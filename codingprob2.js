//class Subject

//this function allows a prompt
const ps = require("prompt-sync");
const prompt =ps();

let subTitle = prompt("Enter Subject Title: ");
let classSched = prompt("Enter Cass Schedule (Time,Days): ");
let room = prompt("Enter Classsrrom: ");
let classInst = prompt("Enter Class Instructor: ");
let student = prompt("Enter Student Name: ");

console.log(student +"is currently enrolled in " + subTitle +" with class schedule of " + classSched +" at room " + room + ". The instructor for the subject is " + classInst + "."); 