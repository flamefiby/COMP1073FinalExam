// JavaScript Document

// declare a class call Person
class Person {
  // the person that takes 4 parameters
  constructor(name, age, gender, classes) {
    this.name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }
  // In the Person class has a greeting function which print the name and the following String
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };
  // In the Person class has a bye function which print the name and the following String
  bye() {
    console.log(`${this.name} has left the building. Bye for now!`);
  };
}

// instantiate new person objects
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
// instantiate new person objects
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);

// declare another class call Teacher inherit the person class that takes 7 parameters
class Teacher extends Person {
  constructor(name, last, age, gender, interests, subject, grade) {
    // inherit the person class constructor
    super(name, age, gender, interests);
    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}
// instantiate a new teacher object
let professor = new Teacher('Ben', 'Blienc', 99 , 'male', 'coding', 'java', '49');