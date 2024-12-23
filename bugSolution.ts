function greeter(person: string | string[]): string | string[] {
  if (Array.isArray(person)) {
    return person.map(name => `Hello, ${name}`);
  } else {
    return "Hello, " + person;
  }
}

let user = ["Jane Doe", "John Smith"];

console.log(greeter(user)); // Correct!