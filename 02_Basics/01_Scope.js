//console.log('ovi');

// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);


// var c = 300

let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30

//           Inner Scope print  -----  BLOCK SCOPE
    console.log("inner scope", a);
}

// global scope print 

console.log(a);
// console.log(b);
//console.log(c);