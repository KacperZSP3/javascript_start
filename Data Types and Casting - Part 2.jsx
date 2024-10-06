console.log()
console.log('Q1')
console.log('----------------')
console.log()
let ticket = {
    from: "Zamosc",
    to: "Warsaw",
    price: 22
};

console.log(`Ticket from: ${ticket.from}`);
console.log(`Ticket to: ${ticket.to}`);
console.log(`Ticket price: ${ticket.price}`);

console.log()
console.log('Q2')
console.log('----------------')
console.log()
let person = {};
person.name = "Mike";
person.surname = "Bike";
console.log(`${person.name} ${person.surname}`);

console.log()
console.log('Q3')
console.log('----------------')
console.log()

let books = [{
    title: "Speaking JavaScript",
    author: "Axel",
    pages: 422
},
    {
        title: "Programming JavaScript Applications",
        author: "Eric",
        pages: 254
    },
    {
        title: "Understanding ECMAScript 6",
        author: "Nicholas",
        pages: 352
    }
];

console.log()
console.log('Q4')
console.log('----------------')
console.log()

let newBook = {
    title: "Learning JavaScript Design Patterns",
    author: "Addy",
    pages: 254
};
books.push(newBook);
console.log(books.length);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);
console.log(books[3].title);

console.log()
console.log('Q5')
console.log('----------------')
console.log()

let selectedBooks = books.slice(-2);
console.log(selectedBooks);

console.log()
console.log('Q6')
console.log('----------------')
console.log()

books.shift();
console.log(books.length);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);

console.log()
console.log('Q7')
console.log('----------------')
console.log()

let sum = books[0].pages + books[1].pages + books[2].pages;
console.log(`pages: ${sum}`);
