//                    Truthy Value


const useremail = []

if(useremail){
console.log("Got User Email");
}
else{
    console.log("Dont have user email");
}


/*
                     Falsy Values

                     false, 0, -0, bigInt 0n, "", null, NaN, Undefined..

                     Truthy Values

                     "0", 'false', " ", [], {}, function(){}
*/



// if(useremail.length === 0){
//     console.log("Array Is Empty");
// }


// const emptyObject = {}

// if(Object.keys(emptyObject).length === 0){
//     console.log("object is empty");
// }

/*
false == 0               o/p    True
false == ''              o/p    True
0 == ''                  o/p    True
*/

//                   Nullish coalescine Operator  (??): Null, Undefined


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 20
val1 = null ?? 11 ?? 25
console.log(val1);



//                            Ternary Operator

//condition ? true : false


const icePrice = 100
icePrice <= 80 ? console.log("Less than 80") : console.log("more than 80");