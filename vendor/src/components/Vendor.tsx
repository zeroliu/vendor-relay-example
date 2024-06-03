import * as React from "react";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "relay-runtime";
import type { VendorQuery as VendorQueryType } from "./__generated__/VendorQuery.graphql";
import { AppLogo } from "./AppLogo";
import { VendorAgreementSummary } from "./VendorAgreementSummary";

const VendorQuery = graphql`
  query VendorQuery($vendorId: ID!) {
    vendor(id: $vendorId) {
      name
      app {
        ...AppLogoFragment
      }
      agreements {
        id
        ...VendorAgreementSummaryFragment
      }
    }
  }
`;

export function Vendor() {
  const data = useLazyLoadQuery<VendorQueryType>(VendorQuery, {
    vendorId: "999",
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "32px",
      }}
    >
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <AppLogo appLogo={data.vendor.app} />
        {data.vendor.name}
      </h1>
      <div
        style={{
          height: "1px",
          backgroundColor: "black",
        }}
      />
      <h2>Vendor Agreements</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {data.vendor.agreements.map((vendorAgreement) => (
          <VendorAgreementSummary
            key={vendorAgreement.id}
            vendorAgreement={vendorAgreement}
          />
        ))}
      </div>
    </div>
  );
}
