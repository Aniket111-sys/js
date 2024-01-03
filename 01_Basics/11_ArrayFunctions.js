const marvelHeros = ["Thor", "Ironman", "Spiderman"]
const dcHeros = ["Superman", "Flash", "Batman"]

// marvelHeros.push(dcHeros) 

//                 When we use .push prototype we get o/p in nested form [Array,[Inside Array and nested array is a single value]]

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

//                          And when we use a .concat proto we get o/p in single Array.

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

//                             Spread Prototype [..., ....] convert multiple array into single array


// const allNewheros = [...marvelHeros, ...dcHeros]
// console.log(allNewheros);


//                              ProtoType FLAT convert multiple nested array into single one 

const anotherArray = [1, 2, 3, [4, 5, 6, ], 7, [6, 7, [4, 5]]]
// const newPerfectArray = anotherArray.flat(Infinity)
// console.log(newPerfectArray);


//                   Data Scraping      [.is   AND .From]

//                  .is   it is used to check the array is present or not in a code 
console.log(Array.isArray("Aniket"));      
//                     .from  it is used to creat Array
console.log(Array.from("Aniket"));


//            Array.of((score1, score2, score3));    
//            it convert multiple variale into a single Array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));



