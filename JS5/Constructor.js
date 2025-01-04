function Person(name, age) {
    this.name = name;
    this.age = age;
    return this
}

// Create a new Person object correctly
const john = new Person("John", 30);
console.log(john.name, john.age); // Output: 'John', 30

// Bug: Calling without `new` does not create a new Person object
const jane = Person("Jane", 25);
console.log(jane.name, jane.age); // Output: Error or `undefined`, `undefined`