// Create a Personal Info Object
// Task: Ask students to create an object called person that stores information like name, age, profession, and hobbies.
// Additional Challenge: Include a method inside the object that prints out a sentence like "My name is John, and I am 25 years old."
// Şəxsi məlumat obyekti yaradın
// Tapşırıq: Şagirdlərdən ad, yaş, peşə və hobbi kimi məlumatları saxlayan şəxs adlı obyekt yaratmağı xahiş edin.
// Əlavə Çağırış: Obyektin içinə “Mənim adım Condur, mənim 25 yaşım var” kimi bir cümlə çap edən metodu daxil edin.
// let person={
//     name:Nuray,
//     age:9,
//     profession:pupil,
//     hobbies:parseInt,
//     introduse:function () {
//         console.log(`my name is ${this.name}, and i have ${this.age}years old`);

//     }
// };
// person.introduse();

// ask: Create an object car with properties like make, model, year, and color. Then, ask them to:
// Add a new property owner.
// Change the color property.
// Delete the year property.

// const car = {
//   make: "Jaguar",
//   model: "E-PACE",
//   year: 2023,
//   color: "black",
// };
// // i add new owner
// car.owner = "Sevinc";
// // i changed the color property
// car.color = "brown";
// // i deleted the year property
// delete car.year;

// console.log(car);

// 3. Nested Objects
// Task: Create an object school that contains information about the name of the school and another object address that stores street, city, and country details.
// Additional Challenge: Ask them to create a method inside the school object that returns the full address as a string.
// const school = {
//     name:"283 sayli tam ort mekteb",
//     adress:{
//         street:"Akhundov",
//         city:"Baku",
//         country:"Azerbaijan",
//     },
//     getFullAdress function(){
//         return`${this.street},${this.city},${this.country}`
//     }
// }
// console.log(school.getFullAddress());

// 4. Array of Objects
// Task: Create an array of objects where each object represents a book with properties like title, author, and yearPublished. Then, ask the students to:
// Loop through the array and print each book's title.
// Add a new book to the array.
// const books = [
//     {
//       title: "yalan noqtesi",
//       author: "Dan Brown",
//       yearPublished: 1990
//     },
//     {
//       title: "Mars Xronikalari",
//       author: "Reyd Bredberi",
//       yearPublished: 1949
//     },
//     {
//       title: "Üzüklərin hökmdarı",
//       author: "J.R.R. Tolkien",
//       yearPublished: 1925
//     }
//   ];
//   console.log("Book Titles:");
// books.forEach(book => {
//   console.log(book.title);
// });

// const newBook = {
//     title: "Taxt Oyunlari",
//     author: "Corc Martin",
//     yearPublished: 1932
//   };
//   books.push(newBook);
//   books.forEach(book => {
//     console.log(`${book.title} by ${book.author} (${book.yearPublished})`);
//   });

// 5. Compare Two Objects
// Task: Create two objects representing two different students with properties like name, grade, and age. Write a function to compare their grades and print who has the higher grade.
// let pupil = {
//   name: "Nuray",
//   grade: "pupil",
//   age: 9,
// };
// let anotherpupil = {
//   name: "Nazrin",
//   grade: "pupil",
//   age: 6,
// };

// function compareGrades(pupil, anotherpupil) {
//     if (pupil.grade > anotherpupil.grade) {
//       console.log(`${pupil.name} has a higher grade (${pupil.grade}).`);
//     } else if (pupil.grade < anotherpupil.grade) {
//       console.log(`${anotherpupil.name} has a higher grade (${anotherpupil.grade}).`);
//     } else {
//       console.log(`${pupil.name} and ${anotherpupil.name} have the same grade (${pupil.grade}).`);
//     }
//   }

//   compareGrades(pupil, anotherpupil);

// 6. Object Destructuring
// Task: Give students an object with several properties (e.g., a user object with properties like name, email, password, etc.) and ask them to use object destructuring to extract some of these properties and print them.

// const user = {
//     name: "Sevinj Nazarova",
//     email: "seva205a@mail.ru",
//     password: "seva2056789",
//     age: 34,
//     address: {
//       street: "Aydinbekhov",
//       city: "Baku",
//       country: "Azerbaijan"
//     }
//   };
// //   now we will destructing name,and adress
// const{name,adsress}=user;
// console.log("name",name);
// console.log("address",address);Object Methods

// Task: Create an object called calculator with methods for add, subtract, multiply, and divide. Each method should accept two numbers as arguments and return the result.

const calculator = {
  toplama: function (a, b) {
    return a + b;
  },
  vurma: function (a, b) {
    return a * b;
  },
  bolme: function (a, b) {
    if (b === 0) {
      return "bolunmur";
    }
    return a / b;
  },
};
