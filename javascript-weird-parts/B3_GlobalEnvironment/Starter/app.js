class Person {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    console.log(`Hello! ${this.name}`);
  }
  
}

class SubPerson extends Person {
  constructor(name, city) {
    super(name);
    this.city = city;
  }
  greetSub() {
    console.log(`Sub Hello! ${this.name}: ${this.city}`);
  }
}

let john = new SubPerson('John', 'St. Louis');

console.log(john.greet());

console.log(john.greetSub());
