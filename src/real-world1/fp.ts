import { Either, left } from "fp-ts/lib/Either";
import { Option, some, none, option } from "fp-ts/lib/Option";
import { sequenceT, sequenceS } from "fp-ts/lib/Apply";

type JsonStatus = "QUOTE" | "WORK_IN_PROGRESS" | "NOT_TAKEN" | "DENIED";

type PolicyStatus = "Quote" | "Application";

export const jsonStatusToPolicyStatus = (
  status: JsonStatus
): Option<PolicyStatus> => {
  switch (status) {
    case "QUOTE":
      return some("Quote");
    case "WORK_IN_PROGRESS":
      return some("Application");

    case "NOT_TAKEN":
    case "DENIED":
      return none;
  }
};

// mapping
type SearchResult = {
  policyStatus: PolicyStatus;
  propertyAddress: string;
  customerName: string;
  policyNumber: number;
};

type JsonSearchResult = {
  status: Option<JsonStatus>;
  propertyAddress: Option<string>;
  customerName: Option<string>;
  policyNumber: Option<number>;
};

const jsonApplicationToSearchResult = (
  jsonSearch: JsonSearchResult
): Option<SearchResult> => {
  const { status, propertyAddress, customerName, policyNumber } = jsonSearch;

  const policyStatus = status.chain(jsonStatusToPolicyStatus);

  return sequenceT(option)(
    policyStatus,
    propertyAddress,
    customerName,
    policyNumber
  ).map(([policyStatus, propertyAddress, customerName, policyNumber]) => ({
    policyNumber,
    customerName,
    propertyAddress,
    policyStatus
  }));
};
