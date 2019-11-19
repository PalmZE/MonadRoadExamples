import { Option, some } from "fp-ts/lib/Option";

export type User = { name: string };

const getCurrentUser = (): Option<User> => some({ name: "rndjs" });

const makeGreeting = (user: User) => "Hello " + user.name;

const louder = (greeting: string) => greeting + "!!!";

// Usage
const user = getCurrentUser();

const greeting = user.map(makeGreeting);
const louderGreeting = greeting.map(louder);

console.log(louderGreeting);
