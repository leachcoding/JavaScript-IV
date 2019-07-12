// CODE here for your Lambda Classes

class Person {
  constructor(attributes) {
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

  demo() {
    return `Today we are learning about ${this.subject}`;
  }
  grade() {
    return `${this.name} receives a perfect score on ${this.subject}`;
  }
}

class Student extends Instructor {
  constructor(studentsAttributes) {
    super(studentsAttributes);
    this.previousBackground = studentsAttributes.previousBackground;
    this.className = studentsAttributes.previousBackground;
    this.favSubjects = studentsAttributes.favSubjects;
  }

  listsSubjects() {
    return `${studentsAttributes.favSubjects}`;
  }
  PRAssignment() {
    return `${this.name} has submitted a PR for ${this.subject}`;
  }
  sprintChallenge() {
    return `${this.name} has begun sprint challenge on ${this.subject}`;
  }
}

class ProjectManager extends Instructor {
    constructor(PMAttributes) {
        super(PMAttributes);
        this.gradClassName = PMAttributes.gradClassName;
        this.favInstructor = PMAttributes.favInstructor;
    }

     standUp() {
        console.log(`${this.name} announces to ${this.channel}`);
    }

     debugsCode() {
        console.log(`${this.name} debugs ${students.name}'s code on ${this.subject}`);
    }
}// PM

// OBJECTS
const evelyn = new Person ({
   "name": 'Evelyn',
   "age": 31,
   "location":'Guam',
   "gender": "F",
});
const tim = new Person({
   "name": 'Tim',
   "age": 40,
   "location": 'New York',
   "gender": "M",
});
const don = new Person({
   "name": 'Don',
   "age": 45,
   "location": 'Hawaii',
   "gender": "M",
});

const josh = new Instructor({
   "name": 'Josh',
   "age": 48,
   "location": 'Utah',
   "gender": "M",
   "specialty": 'Redux',
   "favLanguage": 'Python',
   "catchPhrase": 'Never Surrender!!',
});
const moises = new Instructor({
   "name": 'Moises',
   "age": 35,
   "location": 'Florida',
   "gender": "M",
   "specialty": 'JavaScript',
   "favLanguage": 'French',
   "catchPhrase": 'Viva Cuba!!',
});
const jax = new Instructor({
   "name": 'Jackee',
   "age": 30,
   "location": 'North Dakota',
   "gender": "F",
   "specialty": 'Zoom',
   "favLanguage": 'Spanish',
   "catchPhrase": 'Lets talk about it!!',
});

const lavell = new Student({
   "name": 'lavell',
   "age": 30,
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

const dresean = new ProjectManager({
   "name": 'DreSean',
   "age": 33,
   "location": 'Chicago',
   "gender": 'M',
   "specialty": 'Python tutor',
   "favLanguage": 'German',
   "catchPhrase": 'just do it!!',
   "gradClassName": 'CS5',
   "favInstructor": 'Josh Knell',
});
const patrick = new ProjectManager({
   "name": 'Patrick',
   "age": 45,
   "location": 'Mississippi',
   "gender": 'M',
   "specialty": 'JS',
   "favLanguage": 'Italian',
   "catchPhrase": 'Finish your Repl.it!!',
   "gradClassName": 'CS1',
   "favInstructor": 'Patty Kennedy',
});
const dante = new ProjectManager({
   "name": 'Dante',
   "age": 35,
   "location": 'Phillipines',
   "gender": 'M',
   "specialty": 'Oracle',
   "favLanguage": 'Chinese',
   "catchPhrase": 'Never say Die!!',
   "gradClassName": 'CS10',
   "favInstructor": 'Dan Frehner',
});


console.log(evelyn.name); //?
console.log(evelyn.speak());
josh.speak();
console.log(josh.demo('React'));
console.log(moises.grade(evelyn,'JavaScript'));
console.log(moises.grade(jax,'JavaScript'));
console.log(marco.PRAssignment(evelyn, 'Oracle'));
console.log(lavell.sprintChallenge(marco, 'React'));

console.log(dresean.gradClassName);
console.log(dresean.standUp('Dre', 'CS10 Channel'));
