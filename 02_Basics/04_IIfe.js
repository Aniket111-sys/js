//   console.log('ovi');

//   IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

// function chai () {
//     console.log(`DB connected`);
// }

// chai()


(function chai () {
    console.log(`DB connected`);
})();


(  (name) =>  {
    console.log(`db connected to , ${name}`);
})('ovi')


