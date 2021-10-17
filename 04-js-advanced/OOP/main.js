// class Book {
//     constructor(title,author,genre,year) {
//         this.title = title; 
//         this.author = author; 
//         this.genre = genre; 
//         this.year = year; 
//     }

//     getSummary() {
//         return `${this.title} is written by ${this.author}. The genre is ${this.genre} and it was published in ${this.year}`;
//     }
// }

// // const book1 = new Book ("Harry Potter and the Half-Blood Prince", "J. K. Rowling", "Fiction", 2009);

// // console.log(book1.title)

// class Magazine extends Book {
//     constructor(title,author, genre, year, length) {
//         super(title,author, genre, year)
//         this.length = length;
//     }
// }

// const mag1 = new Magazine ("Mag One", "Sam Joyce", "Tech", 2021, 100);
// console.log(mag1.getSummary())

class Employee {
    constructor (name, rating, grade, nextGrade){
        this.name = name; 
        this.rating = rating;
        this.grade = grade; 
        this.nextGrade = nextGrade;
    }
    checkPromotionStatus() {
        if (this.rating > 7 ) {
            return `${this.name} is up for promoiton from ${this.grade} to ${this.nextGrade}`
        } else {
            `${this.name} can stay put as ${this.grade} for now`
        }
    }
}
const Josie = new Employee ("Josie", "8", "Executive","Manager")

console.log(Josie.checkPromotionStatus())