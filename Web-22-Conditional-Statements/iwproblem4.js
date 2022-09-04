//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let reg_email="abc@gmail.com";
let reg_pass="123456";

let ent_email="abc@gmail.com";
let ent_pass="123456";

if(ent_email==reg_email){
  
  if(ent_pass==reg_pass){
    console.log("Login Successfully");
  } else {
    console.log("Incorrect Password!");
  }
  
} else {
  console.log("Wrong Email");
}