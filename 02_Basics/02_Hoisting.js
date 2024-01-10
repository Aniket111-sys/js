//console.log('ovi');


//              ********NESTED SCOPE*************

function one(){
    const username = "ovi"

    function two(){
const website = "Github"
//console.log(username);
    }
//console.log(website);
two()
}

//one()

if (true) {
    const username = "ovi"
    if (username === "ovi") {
        const surname = " Raut"
       // console.log(username + surname);
    }
    //console.log(website);
}
//console.log(username);





//          *****************INTERESTING*****************

console.log(addone(5))            // RUN SUCCESFULLY

function addone(num){
    return num + 1
}


//console.log(addtwo(5));           // SHOW ERROR
const addtwo = function(num){
    return num + 2
}

console.log(addtwo);
