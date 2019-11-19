// Option, Array, Either

export type User = { name: string };

const getCurrentUser = (): Promise<User> => Promise.resolve({ name: "asf" });

const makeGreeting = (user: User) => "Hello " + user.name;

const louder = (greeting: string) => greeting + "!!!";

// Usage
const user = getCurrentUser();

const greeting = user.then(makeGreeting);

const louderGreeting = greeting.then(louder);

louderGreeting.then(console.log);
