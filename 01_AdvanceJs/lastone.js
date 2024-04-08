//                    Truthy Value


const useremail = []

if(useremail){
//console.log("Got User Email");
}
else{
  // console.log("Dont have user email");
}


/*
                     Falsy Values

                     false, 0, -0, bigInt 0n, "", null, NaN, Undefined..

                     Truthy Values

                     "0", 'false', " ", [], {}, function(){}
*/



if(useremail.length === 0){
 //  console.log("Array Is Empty");
}


const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
  // console.log("object is empty");
}

// output

// false == 0               o/p    True
// false == ''              o/p    True
// 0 == ''                  o/p    True


//                   Nullish coalescine Operator  (??): Null, Undefined


let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 20
val1 = null ?? 11 ?? 25
//console.log(val1);



//                            Ternary Operator

// condition ? true : false


const icePrice = 100
//icePrice <= 80 ? console.log("Less than 80") : console.log("more than 80");

//                             ##MonthsUsingSwitchCases
const month = 10;

switch (month) {

    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

        case 5:
        console.log("May");
        break;

        case 6:
        console.log("June");
        break;

        case 7:
        console.log("July");
        break;

        case 8:
        console.log("August");
        break;

        case 9:
        console.log("September");
        break;

        case 10:
        console.log("October");
        break;

        case 11:
        console.log("November");
        break;

        case 12:
        console.log("December");
        break;
    default:
        console.log("Please Enter Correct Value");
        break;
}

//                                            ## DaysUsingSwitchCase
let day = 4; 
let dayName; 
  
switch (day) { 
    case 1: 
        dayName = "Monday"; 
        break; 
    case 2: 
        dayName = "Tuesday"; 
        break; 
    case 3: 
        dayName = "Wednesday"; 
        break; 
    case 4: 
        dayName = "Thursday"; 
        break; 
    case 5: 
        dayName = "Friday"; 
        break; 
    case 6: 
        dayName = "Saturday"; 
        break; 
    case 7: 
        dayName = "Sunday"; 
        break; 
    default: 
        dayName = "Invalid day"; 
} 
  
console.log(dayName);

//                                                   ##YearUsingSwitchCases


const year = 10;

switch (year) {

    case 1:
        console.log("2000");
        break;
    case 2:
        console.log("2001");
        break;
    case 3:
        console.log("2002");
        break;
    case 4:
        console.log("2003");
        break;

     case 5:
        console.log("2004");
        break;

    case 6:
        console.log("2005");
        break;
    case 7:
        console.log("2006");
        break;
    case 8:
        console.log("2007");
        break;

     case 9:
            console.log("2008");
            break;
     
      case 10:
        console.log("2009");      
            break;

            case 11:
                console.log("2010");
                break;

     default:
            console.log("Enter Correct Year");
}