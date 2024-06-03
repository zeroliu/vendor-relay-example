import * as React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";
import { VendorAgreementSummaryFragment$key } from "./__generated__/VendorAgreementSummaryFragment.graphql";

const VendorAgreementSummaryFragment = graphql`
  fragment VendorAgreementSummaryFragment on VendorAgreementField {
    name
    totalCost
    label
  }
`;

type Props = {
  vendorAgreement: VendorAgreementSummaryFragment$key;
};

export function VendorAgreementSummary({ vendorAgreement }: Props) {
  const data = useFragment(VendorAgreementSummaryFragment, vendorAgreement);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "8px",
        padding: "16px",
        borderRadius: "16px",
        border: "1px solid #000",
      }}
    >
      <h3>
        {data.name}{" "}
        {data.label && (
          <span
            style={{
              color: "gray",
            }}
          >
            ({data.label})
          </span>
        )}
      </h3>
      <span>Total cost: {data.totalCost}</span>
    </div>
  );
}
