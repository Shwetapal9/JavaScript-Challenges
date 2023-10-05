function changeProperty(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50,
  };
  return person;
}
const personObj1 = { name: "Alex", age: 30 };
const personObj2 = changeProperty(personObj1);
console.log(personObj1); //{ name: 'Alex', age: 25 }
console.log(personObj2); //{ name: 'John', age: 50 }
