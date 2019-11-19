//

export type UserAddress = {
  country: string | null;
  region: string | null;
  city: string | null;
  address: string | null;
};

const makeFullAddress = (userAddress: UserAddress): string | null => {
  const { country, region, city, address } = userAddress;
  if (
    country !== null &&
    region !== null &&
    city !== null &&
    address !== null
  ) {
    return `${city}, ${region}, ${country} - ${address}`;
  }

  return null;
};

const userAddress = {
  country: "Country",
  region: "Region",
  city: "City",
  address: "Address"
};

console.log(makeFullAddress(userAddress));
