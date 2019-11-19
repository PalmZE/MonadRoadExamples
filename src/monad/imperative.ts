//
export type User = {
  id: number;
};

export type BankAccount = {
  usdBalance: number | null;
};

const getCurrentUser = (): User | null => ({
  id: 43
});

const getBankAccount = (userId: number): BankAccount | null => {
  return { usdBalance: 100 };
};

const convertUsdToRoubles = (usd: number) => usd * 30;

// Usage
const user = getCurrentUser();

let balanceInRoubles = null;

if (user !== null) {
  const bankAccount = getBankAccount(user.id);

  if (bankAccount !== null && bankAccount.usdBalance !== null) {
    balanceInRoubles = convertUsdToRoubles(bankAccount.usdBalance);
  }
}

console.log(balanceInRoubles);
