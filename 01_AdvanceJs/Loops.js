//  console.log("ovi");
//                                Loops
//                            1 :- For Loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
       // console.log("5 is the best no");
    }
   // console.log(element);
    
}

for (let a = 1; a <= 10; a++) 
{
   // console.log(`Outer loop value: ${a}`);
    for (let b = 1; b <= 10; b++) 
    {
       // console.log(`Inner loop value ${b} and inner loop value ${a}`);

       //console.log(a + '*' + b + '=' + a*b);
    }
    
}


let myArray = ["batman", "Spiderman", "Ironman", "Hanuman", "CommonMan"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index--) {
    const element = myArray[index];

    //console.log(element);
    
}


//                  Break and Continue


for (let index = 1; index <= 20; index++)
 {
    console.log(`value of Index is ${index}`);
    
}