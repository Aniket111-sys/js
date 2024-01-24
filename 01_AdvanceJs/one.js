// //      if

// const userloggedin = true
// const tempreture = 54

// if(tempreture > 54){
// console.log("tempreture is Less Than 50");
// }

// else{
//    console.log("tempreture is Greater than 50");
// }






// let Score = 200

// if (Score > 100) {
// let power = "fly"
// console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);


// else{
//     console.log(`User power: not good`);
// }


//           Short hand notation

// const balance = 1000
// if(balance > 500) console.log("test");


//  //                   Nested if else


// const balance = 1000

// if(balance < 500){
// console.log("less than 500 ");
// }

// else if(balance <  900){
// console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }



// //          code 2


const userloggedin = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if(userloggedin && debitCard && loggedInfromGoogle){
console.log("Alow to buy courses");
}
if(loggedInfromEmail && loggedInfromGoogle){
    console.log("user logged in");
}
else{
    console.log("Currently User not logged In there System");
}




 /*   
                       Note 
  use && when all conditions are true otherwise it will shows error
  use of ||  it will gives output when any one condition is true 
  else is for default output if all condition are fale then it will


 */


  