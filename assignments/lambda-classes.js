// CODE here for your Lambda Classes

class Person { // Parent over all classes, the initial class Person.
  constructor(attributes) { // Properties assignment attributes for every Person.
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }

  speak() {
    return `Hello, my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(studentObj, subject) {
    return `${studentObj.name} recieves a perfect score on ${subject}!`;
  }
}

class Student extends Person {
  constructor(studentsAttributes) {
    super(studentsAttributes);
    this.previousBackground = studentsAttributes.previousBackground;
    this.className = studentsAttributes.previousBackground;
    this.favSubjects = studentsAttributes.favSubjects;
  }

  listsSubjects() {
    return `${this.name} likes ${this.favSubjects}`;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}!`;
  }
}

class ProjectManager extends Instructor {
    constructor(PMAttributes) {
        super(PMAttributes);
        this.gradClassName = PMAttributes.gradClassName;
        this.favInstructor = PMAttributes.favInstructor;
    }

     standUp(channel) {
        console.log(`${this.name} announces to ${channel}`);
    }

     debugsCode(student, subject) {
        console.log(`${this.name} debugs ${students.name}'s code on ${subject}`);
    }
}// PM

// OBJECTS
const bob = new Person ({
   "name": 'Bob',
   "age": 42,
   "location":'El Paso',
   "gender": "M",
});
const tim = new Person({
   "name": 'Tim',
   "age": 70,
   "location": 'Buffalo',
   "gender": "M",
});
const carl = new Person({
   "name": 'Carl',
   "age": 30,
   "location": 'Tampa',
   "gender": "M",
});

const jim = new Instructor({
   "name": 'Jim',
   "age": 39,
   "location": 'Chesapeake',
   "gender": "M",
   "specialty": 'Redux',
   "favLanguage": 'Python',
   "catchPhrase": 'Never Surrender!!',
});
const mark = new Instructor({
   "name": 'Mark',
   "age": 73,
   "location": 'Tulsa',
   "gender": "M",
   "specialty": 'JavaScript',
   "favLanguage": 'French',
   "catchPhrase": 'Viva Cuba!!',
});
const jessica = new Instructor({
   "name": 'Jessica',
   "age": 60,
   "location": 'Cleveland',
   "gender": "F",
   "specialty": 'Zoom',
   "favLanguage": 'Spanish',
   "catchPhrase": 'Lets talk about it!!',
});

const jerome = new Student({
   "name": 'Jerome',
   "age": 31,
   "location": 'San Francisco',
   "gender": "M",
    "previousBackground": 'Teacher',
   "className": 'CS10',
   "favSubjects": 'Art',
});

const maribel = new Student({
   "name": 'Maribel',
   "age": 36,
   "location": 'Phillipines',
   "gender": "F",
   "previousBackground": 'Wev Developer',
   "className": 'CS10',
   "favSubjects": 'Math',
});

const marco = new Student({
   "name": 'Marco',
   "age": 39,
   "location": 'San Diego',
   "gender": "M",
   "previousBackground": 'Librarian',
   "className": 'CS10',
   "favSubjects": 'Coding',
});

const deandre = new ProjectManager({
   "name": 'Deandre',
   "age": 36,
   "location": 'Denver',
   "gender": 'M',
   "specialty": 'Python tutor',
   "favLanguage": 'German',
   "catchPhrase": 'just do it!!',
   "gradClassName": 'CS5',
   "favInstructor": 'Josh Knell',
});
const rick = new ProjectManager({
   "name": 'Rick',
   "age": 47,
   "location": 'Durham',
   "gender": 'M',
   "specialty": 'JS',
   "favLanguage": 'Italian',
   "catchPhrase": 'Finish your Repl.it!!',
   "gradClassName": 'CS1',
   "favInstructor": 'Patty Kennedy',
});
const reggie = new ProjectManager({
   "name": 'Reggie',
   "age": 43,
   "location": 'Los Angeles',
   "gender": 'M',
   "specialty": 'Oracle',
   "favLanguage": 'Chinese',
   "catchPhrase": 'Never say Die!!',
   "gradClassName": 'CS10',
   "favInstructor": 'Dan Frehner',
});


console.log(bob.name); //?
console.log(bob.speak());
console.log(jim.demo('React'));
console.log(mark.grade(bob,'JavaScript'));
console.log(mark.grade(jessica,'JavaScript'));
console.log(marco.PRAssignment('Oracle'));
console.log(jerome.sprintChallenge('React'));
console.log(deandre.gradClassName);
console.log(deandre.standUp('Reggie'));
