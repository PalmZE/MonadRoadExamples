// Option, Array, Either

export type User = { name: string };

const getCurrentUser = (): User | null => ({ name: "rndjs" });

const makeGreeting = (user: User) => "Hello " + user.name;

const louder = (greeting: string) => greeting + "!!!";

// Usage
const user = getCurrentUser();

let greeting = null;
if (user !== null) {
  greeting = makeGreeting(user);
}

let louderGreeting = null;
if (greeting !== null) {
  louderGreeting = louder(greeting);
}

console.log(louderGreeting);
