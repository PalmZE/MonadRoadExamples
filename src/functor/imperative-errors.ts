// Option, Array, Either

export type User = { name: string };

const getCurrentUser = (): User => {
  throw Error("User not found");
  // return { name: "rndjs" };
};

const makeGreeting = (user: User) => "Hello " + user.name;

const louder = (greeting: string) => greeting + "!!!";

// Usage
const user = getCurrentUser();

const greeting = makeGreeting(user);

const louderGreeting = louder(greeting);

console.log(louderGreeting);
