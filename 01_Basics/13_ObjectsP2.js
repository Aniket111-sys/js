//console.log("Annu");


//                  **************Objects - Singletone****************

//  const tinderUser = new Object()                     Singletone Object

const tinderUser = {}                               // non-Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Ovi"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "ovir@gmail.com",
    fullname: {
        userfullname: {
            firstName: "ovi",
            lastname: "Raut"
        }
    }

}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "6"}
//const obj3 = {obj1, obj2}                             it shows seprate object
//const obj3 = Object.assign({}, obj1, obj2, obj4)            // in single object

const obj3 = {...obj1, ...obj2, ...obj4}                    // Spread Method
//console.log(obj3);


console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));