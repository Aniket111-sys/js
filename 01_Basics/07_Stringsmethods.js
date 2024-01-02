//not used               #odd Method not Professional Used

const name = "Aniket"
const repoCount = "45"
console.log(name +  repoCount);


// Backstic Method  "``"  String Interpolation

console.log(`Hello my name is ${name} and My repo count is ${repoCount}`);


// String Methods Use

const gameName = new String("Annu-Ap-com-col-sm")
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

// Sanitisation methods of string

const newString = gameName.substring(0,5)   //last valu is not included in Sub-String Method
console.log(newString);

const anoterString = gameName.slice(-6,4)
console.log(anoterString);

const newStringOne = "   Annu   "
console.log(newStringOne);
console.log(newStringOne.trim());                  // Remove Spaces (.trim)

const url = "https://aniket.com/aniket%20raut"
console.log(url.replace('%20', '-'));
console.log(url.includes('okk'));

console.log(gameName.split('-'));

