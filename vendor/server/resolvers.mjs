// Fake Database
const nodes = [
  {
    __typename: "VendorField",
    id: "999",
    name: "Slack",
    appID: "app1",
    agreements: [
      {
        __typename: "VendorAgreementField",
        id: "va1",
        sourceAppInstanceIdentifier: "1",
        name: "Slack",
        label: "First slack contract",
        currency: "USD",
        isAutoRenewal: true,
        totalCost: "100.00",
      },
      {
        __typename: "VendorAgreementField",
        id: "va2",
        sourceAppInstanceIdentifier: "1",
        name: "Slack",
        label: "Latest slack contract",
        currency: "USD",
        isAutoRenewal: true,
        totalCost: "51698.63",
      },
    ],
  },
  {
    __typename: "AppFieldWithoutSensitiveData",
    id: "app1",
    name: "Slack",
    description: "A messaging app for teams",
    logoUrl: "https://logo.clearbit.com/slack-corp.com",
  },
];

export function nodeResolver({ id }) {
  return nodes.find((node) => node.id === id);
}

export function vendorResolver(_, { id }) {
  return nodes.find(
    (node) => node.__typename === "VendorField" && node.id === id
  );
}

export function appResolver(vendor) {
  return nodes.find(
    (node) =>
      node.__typename === "AppFieldWithoutSensitiveData" &&
      node.id === vendor.appID
  );
}

export const rootValue = {
  node: (args) => {
    return nodeResolver(args);
  },
};
