// CODE here for your Lambda Classes

// * CLASSES * //

// * Person Class * //
class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
    this.subject = attr.subject;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

// * Instructor Class * //
class Instructor extends Person {
  constructor(teacherAttr) {
    super(teacherAttr);
    this.speciality = teacherAttr.speciality;
    this.favLanguage = teacherAttr.favLanguage;
    this.studentName = teacherAttr.studentName;
  } //closes constructor

  // * Prototype Methods
  catchPhase() {
    return `I am the best at ${this.speciality} and ${this.favLanguage}.`;
  } //closes prototype

  demo() {
    return `Today we are learning about ${this.subject}`;
  } //closes prototype

  grade() {
        return `${studentOne.name} receives a perfect score on ${this.subject}.`
  } //closes prototype
} //closes class

// * PM class * //
class Pm extends Instructor {
  constructor(pmAttr) {
    super(pmAttr);
    this.gradClassName = pmAttr.gradClassName;
    this.favInstructor = pmAttr.favInstructor;
    this.channel = pmAttr.channel;
  } //closes constructor

  // * Prototype Methods
  standUp() {
    return `${this.name} announces to ${this.channel}, @channel standup time!`;
  } //closes prototype

  debugsCode() {
    return `${this.name} debugs ${studentOne.name}'s code on ${studentOne.subject}`;
  } //closes prototype
} //closes class

// * Student Class * //
class Student extends Person {
  constructor(studentAttr) {
    super(studentAttr);
    this.prevBg = studentAttr.prevBg;
    this.className = studentAttr.className;
    this.favSubjects = studentAttr.favSubjects;
    this.score = studentAttr.score;
  }; //closes constructor

  // * Prototype Methods
  listsSubject() {
    return `${this.favSubjects}`;
  }; //closes prototype

  prAssignment() {
    return `${this.name} has submitted a PR for ${this.subject}`;
  }; //closes prototype

  sprintChallenge() {
    return `${this.name} has begun sprint challenge on ${this.subject}`;
  }; //closes prototype
} //closes class

// * OBJECTS * //
const fred = new Person({
    name: 'Fred',
    location: 'Bedrock',
    age: 37
  });

const instructorOne = new Instructor({
  name: "Mr. Jones",
  age: 34,
  location: "USA",
  subject: 'Javascript',
  speciality: "react",
  favLanguage: "Javascript",
  catchPhrase: "I am the best at react and Javascript."
}); //ends object

const instructorTwo = new Instructor({
    name: "Ms.Standfield",
    age: 42,
    location: "UK",
    subject: 'Python',
    speciality: "API",
    favLanguage: "Python",
    catchPhrase: "I am the best at API and Python."
  }); //ends object

const projectManagerOne = new Pm({
  name: "Emily",
  age: 23,
  location: "USA",
  speciality: "react",
  favLanguage: "Python",
  catchPhrase: "You can't teach Python to a monkey",
  gradClassName: "WEB20",
  favInstructor: "Mr. Jones",
  channel: 'web23_emily'
}); //ends object

const projectManagerTwo = new Pm({
    name: "Natasha",
    age: 30,
    location: "Canada",
    speciality: "react",
    favLanguage: "Javascript",
    catchPhrase: "Git down or be square",
    gradClassName: "WEB10",
    favInstructor: "Mrs. Standfield",
    channel: 'web23_Natasha'
  }); //ends object

const studentOne = new Student({
  name: "Anna",
  age: 18,
  location: "Canada",
  subject:'Javascript',
  prevBg: "HTML/CSS",
  className: "WEB23",
  favSubjects: "[Javascript, HTML/CSS]"
}); //ends object

const studentTwo = new Student({
    name: "Jenkins",
    age: 31,
    location: "UK",
    subject:'React',
    prevBg: "Python",
    className: "WEB22",
    favSubjects: "[Javascript, HTML/CSS, React, API, Python]"
  }); //ends object

// * LOGS * //
console.log(instructorOne.name);
console.log(projectManagerTwo.location);
console.log(studentOne.name);
console.log(studentOne.listsSubject());
console.log(instructorOne.demo());
console.log(studentTwo.prAssignment());
console.log(studentTwo.sprintChallenge());
console.log(instructorTwo.grade());
console.log(instructorTwo.catchPhase());
console.log(projectManagerOne.standUp());
console.log(projectManagerTwo.debugsCode());
console.log(fred.speak())
/*
Stretch Problem
* Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
* Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.
* Add a graduate method to a student.
    - This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
    - If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/
