//console.log('Ovi');

///           **********OBJECTS IN  JAVASCRIPT******************
//                                              1. Singleton  Object.create


//                   ******************Object Literals***********

const mySym = Symbol("key1")

const UserTom = {
name: "Ovi",
"full name": "Ovi raut",
[mySym]: "mykey1",                                 //Symbol declaration
age: "6M",
location: "Malkapur",
email: "ovir@gmail.com"
}

// console.log(UserTom.email);
// console.log(UserTom["email"]);
// console.log(UserTom["full name"]);
// console.log(UserTom[mySym]);
// console.log(typeof mySym);
//console.log(UserTom.location);


UserTom.email = "ovipn@gmail.com"
//Object.freeze(UserTom)
UserTom.location = "pune"

console.log(UserTom);

//                  ************FUNCTION*************

UserTom.greeting = function(){
    console.log("Hello User Tom");
}
UserTom.greetingTwo = function(){
    console.log(`Hello User Tom, ${this.name}`);              //.This use for the element Access from other object
}
console.log(UserTom.greeting());
console.log(UserTom.greetingTwo());