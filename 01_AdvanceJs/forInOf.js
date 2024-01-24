const myObject = {
    js: "java script",
    rb: "ruby",
    cpp: "c++",
    swift: "Swift by app "
}

for (const key in myObject) {
    //console.log(key);
    //console.log(myObject[key]);
   // console.log(`${key} shortcut is ${myObject[key]}` );
}


const programming = ["js", 'rruby','python', 'swift']

for (const key in programming) {
//console.log(programming[key]);
}

/*                         map is not iterable in forIn loop

let map = new Map()

map.set('IN', "INDIA")
map.set('USA', "United States")
map.set('Is', "Israel")

for (const key in map) {
    console.log(key);
}
*/


//                       Direct loop (prop)

const coding = ["js", 'rruby','python', 'swift']

// coding.forEach( function (keys){
//     console.log(keys);
// })





// coding.forEach( (keys) => {
//     console.log(keys);
// })





// function printMe (item){
//     console.log(item);
// }

// coding.forEach(printMe)




// coding.forEach( (item, index, arr) => {

// console.log(item, index, arr);
// })



const myCoding = [
    {
        languageName: "JavaScript",
        languageFilename: "js"
    },

    {
        languageName: "Java",
        languageFilename: "java"
    },

    {
        languageName: "c++",
        languageFilename: "cpp"
    }

]

myCoding.forEach( (item) => {
    //console.log(item.languageName, item.languageFilename);

    console.log(`language name is ${item.languageName} and file name is ${item.languageFilename}`);
})