class Person {
  constructor(fName, lName, age, email) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.email = email;
  }
  toString() {
    return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
  }
}

let person = new Person("Anna", "Simpson", 22, "anna@yahoo.com");
console.log(person);
console.log(person instanceof Person);
console.log(person instanceof Object);
