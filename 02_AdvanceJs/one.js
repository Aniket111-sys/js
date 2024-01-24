//      console.log('ovi');

//                                    Map-Filter-Reduce

// const coding = ["js", "ruby", "html", "css", "sql"]

// const values = coding.forEach( (element) => {
//     console.log(element);
//     return element
// });
// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//    return num > 4
// } ) 


// const newNum = []
// myNums.forEach( (num) => {

//     if (num > 5) {
//         newNum.push(num)
//     }
// })

// console.log(newNum);


const Books = [

    { title: 'book One', genre: "fiction", publish: 1980, edition: 2004},
    { title: 'book two', genre: "non fiction", publish: 2003, edition: 2004},
    { title: 'book three', genre: "History", publish: 1980, edition: 2014},
    { title: 'book four', genre: "fiction", publish: 2005, edition: 2004},
    { title: 'book five', genre: "History", publish: 1983, edition: 2006},
    { title: 'book six', genre: "Novel", publish: 2011, edition: 2004},
    { title: 'book seven', genre: "Geography", publish: 1980, edition: 2004},
    { title: 'book eight', genre: "Geopolitics", publish: 2000, edition: 2016},
    { title: 'book nine', genre: "fiction", publish: 2022, edition: 2020},
    { title: 'book ten', genre: "International relations", publish: 2021, edition: 2022},

];

let userBooks = Books.filter((bk) => bk.title === "History")

 userBooks = Books.filter( (bk) => { 
    return bk.publish >= 2000 && bk.genre === "Geopolitics"
})

console.log(userBooks);