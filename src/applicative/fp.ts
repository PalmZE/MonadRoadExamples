import { Option, option, some, none } from "fp-ts/lib/Option";
import { sequenceT } from "fp-ts/lib/Apply";

export type UserAddress = {
  country: Option<string>;
  region: Option<string>;
  city: Option<string>;
  address: Option<string>;
};

const makeFullAddress = (userAddress: UserAddress): Option<string> => {
  const sequence = sequenceT(option);
  const { country, region, city, address } = userAddress;

  return sequence(country, region, city, address).map(
    ([country, region, city, address]) =>
      `${city}, ${region}, ${country} - ${address}`
  );
};

const userAddress: UserAddress = {
  country: some("Country"),
  region: some("Region"),
  city: some("City"),
  address: some("Address")
};

console.log(makeFullAddress(userAddress));
