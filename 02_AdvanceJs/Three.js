//                                  Reduce    


const num = [1, 2, 3]

// const myTotal = num.reduce( function (acc, currval) {
//     console.log(`acc val ${acc} and currval is ${currval}`);
//     return acc + currval
// } , 0)


const mynum = num.reduce( (acc, currval) => acc + currval, 0 )

console.log(mynum);



const shoppingCart = [
    {
        itemName: "Maggie",
        price: 2000
    },

    {
itemName: "mobile",
price: 2311
    },
    {
itemName: "Laptop",
price: 60000
    },
]

const totall = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(totall);