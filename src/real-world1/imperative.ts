type JsonStatus = "QUOTE" | "WORK_IN_PROGRESS" | "NOT_TAKEN" | "DENIED";

type PolicyStatus = "Quote" | "Application";

export const jsonStatusToPolicyStatus = (
  status: JsonStatus
): PolicyStatus | null => {
  switch (status) {
    case "QUOTE":
      return "Quote";
    case "WORK_IN_PROGRESS":
      return "Application";

    case "NOT_TAKEN":
    case "DENIED":
      return null;
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
  status: JsonStatus | null;
  propertyAddress: string | null;
  customerName: string | null;
  policyNumber: number | null;
};

const jsonToDomain = (jsonSearch: JsonSearchResult): SearchResult | null => {
  const { status, propertyAddress, customerName, policyNumber } = jsonSearch;

  if (
    status === null ||
    propertyAddress === null ||
    customerName === null ||
    policyNumber === null
  ) {
    return null;
  }

  const policyStatus = jsonStatusToPolicyStatus(status);
  if (policyStatus === null) {
    return null;
  }

  return {
    policyNumber,
    policyStatus,
    customerName,
    propertyAddress
  };
};
