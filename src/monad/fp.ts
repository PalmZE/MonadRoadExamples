import { Option, some, none } from "fp-ts/lib/Option";
//
export type User = {
  id: number;
};

export type BankAccount = {
  usdBalance: Option<number>;
};

const getCurrentUser = (): Option<User> => some({ id: 43 });

const getBankAccount = (userId: number): Option<BankAccount> => {
  return some({ usdBalance: some(100) });
};

const convertUsdToRoubles = (usd: number) => usd * 60;

// Usage
const user = getCurrentUser();

const balanceInRoubles = user
  .chain(user => getBankAccount(user.id))
  .chain(account => account.usdBalance)
  .map(convertUsdToRoubles);

console.log(balanceInRoubles);
