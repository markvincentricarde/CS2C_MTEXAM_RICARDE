//coding problem 7-8


const ps = require("prompt-sync");
const prompt =ps();

let DSA = [];
let PL = [];
let Networks = [];


function displayStudents() {
    console.log("DSA Students: ", DSA);
    console.log("PL Students: ", PL);
    console.log("Networks Students: ", Networks);
}

while (true) {
    let subject = prompt("Select a subject to enroll a student:\n(A) DSA\n(B) PL\n(C) Networks\n((X) to exit)").toLowerCase();
    
    if (subject === 'X') {
        displayStudents();
        console.log("Exiting the program.");
        break; 
    }

    let selectedArray;
    switch (subject) {
        case 'a':
        case 'dsa':
            subject = 'DSA';
            selectedArray = DSA;
            break;
        case 'b':
        case 'pl':
            subject = 'PL';
            selectedArray = PL;
            break;
        case 'c':
        case 'networks':
            subject = 'Networks';
            selectedArray = Networks;
            break;
        default:
            console.log("Invalid subject selection.");
            continue; // Go back to subject selection
    }

    // Operations loop
    while (true) {
        let operation = prompt("Select an operation:\na. Enroll\nb. Unenroll\nc. Select Another Subject\n(x to exit)").toLowerCase();

        if (operation === 'x') {
            displayStudents();
            console.log("Exiting the program.");
            return; 
        }

        switch (operation) {
            case 'a':
            case 'enroll':
                let studentName = prompt("Enter the name of the student to enroll:");
                selectedArray.push(studentName); 
                console.log(`${studentName} has been enrolled in ${subject}.`);
                break;

            case 'b':
            case 'unenroll':
                if (selectedArray.length === 0) {
                    console.log("No students are currently enrolled in this subject.");
                    continue; // Go back to operations
                }

                console.log("Currently enrolled students:", selectedArray);
                let unenrollName = prompt("Enter the name of the student to unenroll:");
                const index = selectedArray.indexOf(unenrollName);

                if (index !== -1) {
                    selectedArray.splice(index, 1); 
                    console.log(`${unenrollName} has been unenrolled from ${subject}.`);
                } else {
                    console.log("Student not found.");
                }
                break;

            case 'c':
            case 'select another subject':
                break; 

            default:
                console.log("Invalid operation selection.");
        }

        if (operation === 'c' || operation === 'select another subject') {
            break;
        }
    }
}
