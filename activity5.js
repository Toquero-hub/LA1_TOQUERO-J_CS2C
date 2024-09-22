//Create a variable named favActorFirstName and store your favorite actor's first name
let favActorFirstName = "Tom"; // Replace with your favorite actor's first name

//Create a variable named favActorLastName and store their last name
let favActorLastName = "Hiddlestone"; // Replace with your favorite actor's last name

//Concatenate the first and last names into a variable named fullName
let fullName = favActorFirstName + " " + favActorLastName;

//Create a variable named uppercase and store the capitalized version of your favorite actor's name
let uppercase = fullName.toUpperCase();

//Create a variable named message and store a message like: "My favorite actor is [FULL_NAME]"
let message = "My favorite actor is " + uppercase;

//Append the message to include "his best show is Silicon Valley"
message += ". His best show is Silicon Valley.";

//Log all variables to the console
console.log("First Name: " + favActorFirstName);
console.log("Last Name: " + favActorLastName);
console.log("Full Name: " + fullName);
console.log("Uppercase Name: " + uppercase);
console.log("Message: " + message);
