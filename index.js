const readline = require("readline");
const ageValidation = require("./Promise");
const WriteFile = require("./fileCreation");

const rd = new readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rd.question("Please Enter Age? ", function (answer) {
  ageValidation(answer)
    .then(() => {
      console.log("Thank you! your Eligible for Voting ");
      WriteFile("./Files/Test.txt", "Thank you! your Eligible for Voting ")
        .then(() => {
          console.log("File created Successfully");
        })
        .catch(() => {
          "File creationg failed";
        });
    })
    .catch((error) => {
      console.log("Sorry! your not Eligible");
    });

  rd.close();
});
