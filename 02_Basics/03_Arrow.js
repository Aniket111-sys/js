//console.log('ovi');


//            ***************This-Keyword*****************    use  in current context

const user = {
    username: "ovi",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "aniket"             
// user.welcomeMessage()

//console.log(this);



//             ***************Arrow-Function************

// function chai (){
//     let name = "aniket"
//     console.log(this.name);

// }
// chai()


// const chai = function (){
//     let name = "aniket"
//     console.log(this.name);
// }

const chai =  () => {
    let name = "aniket"
    console.log(this.name);
} 
//   chai()





// arrow

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }



// const addtwo = (num1, num2) => (num1 + num2)              // implicit return

const addtwo = (num1, num2) => ({username: "aniket"})

console.log(addtwo(5, 7));

