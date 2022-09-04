//Chunnu scored 75 marks inEnglish (check the subject as well), the passing marks are 70.Print "Passed in English", if he scored more than passing marks otherwise print "Failed".

let subject="English";

let marks=75;

let pass_marks=70;

/*
//ternary
subject=marks && pass_marks<marks ? console.log("Passed in English") : console.log("Failed");
*/

//Nested condition
if(subject=marks){
  if (pass_marks<marks){
    console.log("Passed in English");
  }
} else {
  console.log("Failed");
}

//logical condition
if(subject=marks && pass_marks<marks){
  console.log("Passed in English");
} else {
  console.log("Failed");
}
