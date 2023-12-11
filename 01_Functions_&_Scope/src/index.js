//Data 
const inventory = [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            price: 10.00,
            reviews: [{userID: 1, content:'Good book, but not great for new coders'}],
            inventory: 10,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            price: 45.75,
            reviews: [{userID: 15, content:'good way to learn JQuery'}],
            inventory: 2,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            price: 36.00,
            reviews: [{userID: 25, content:'I disagree with everything in this book'}, {userID: 250, content:'Only JS book anyone needs'}],
            inventory: 8,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            price: 25.50,
            reviews: [{userID: 44, content:'Great intro to js book'}, {userID: 350, content:'It really is the Definitive guide'}],
            inventory: 0,
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don\’t Know JS',
            author: 'Kyle Simpson',
            price: 6.00,
            reviews: [{userID: 76, content:'You can find this for free online, no need to pay for it!'}],
            inventory: 7,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        }, 
        {
            id:6,
            title: 'Learn Enough JavaScript to Be Dangerous',
            author: 'Michael Hartl',
            price: 24.00,
            reviews: [{userID: 50, content:'pretty good'}],
            inventory: 5,
            imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQyf6xSyTHc7a8mx17ikh6GeTohc88Hn0UgkN-RNF-h4iOwVlkW'

        },
        {
            id:7,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            price: 49.95,
            reviews: [{userID: 99, content:'One of the most helpful books for taking on the tech interview'}, {userID:20, content: 'Great but I just wish it was in JavaScript instead of Java' }],
            inventory: 20,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'

        }
    ]

console.log(inventory[0])


function priceFormatter(book){
    console.log(book)
    return `$ ${book.price}`
}
console.log(priceFormatter(inventory[0]))

const titleAndAuthor = book => `Title: ${book.title} by ${book.author}`
console.log(titleAndAuthor(inventory[0]))

const bookOnSale = book => `Title ${book.title} is on sale!`
console.log(bookOnSale(inventory[0]))

const discountPrice = (discount, book) => book.price / discount
console.log(discountPrice(2.00, inventory [0]))
const newTitle = "The Javascript Cookbook"
function buildBook(title,price, author, imageUrl){
    const obj = {}
    obj.title = title
    obj.price = price
    obj.author = author
    obj.imageUrl = imageUrl
    obj.reviews = []
    obj.inventory = 0
    obj.id = inventory.length + 1

    if(!imageUrl){
        const defaultImage = "placeholder.jpg"
        obj.imageUrl = defaultImage
    }
    else{
        obj.imageUrl = imageUrl
    }
    return obj
}
inventory.push(buildBook(newTitle, 25, "austin Powers"))

console.log(inventory)

function mapOverArray(book, callback){
    const newInventory = []
    for(let item of book){//new syntax
        console.log(item)
        newInventory.push(callback(item))
    }
    return newInventory
}
console.log(mapOverArray(inventory, (book => book.title)))
console.log(mapOverArray(inventory, (book) => book.author))
console.log(mapOverArray(inventory, priceFormatter))

let arr = [1,2,3,4,5,6,7,8,9]
for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i] * 3
}
console.log(arr)
let arr2 = [2,4,6,8,10]
let mappedArray = arr2.map((num) => {
    return num * 3
})
console.log(mappedArray)
let users = [
    {
        firstname: "stephin",
        lastname: "lambert"
    },
    {
        firstname: "David",
        lastname: "Doan"
    }
]

let fullnames = users.map((names) =>{
    console.log(names)
    return `${names.firstname} ${names.lastname}`
})
console.log(fullnames)
//     function sayHi(){
//     return 'hi';
// }
// console.log(sayHi());

// const faveFood = food => `My fav food is ${food}`
// console.log(faveFood("pizza"));

// // //callback function
// // function greeting(name, callback){
// //     console.log("Hello ")
// //     callback(name)
// }
// function sayName(name){
//     console.log("Hello " + name)
//     return "Hello" + name
// }
// function sayGoodbye(name){
//     console.log("goodbye " + name)
//     return "Goodbye" + name
// }
// greeting("nick", sayName)









