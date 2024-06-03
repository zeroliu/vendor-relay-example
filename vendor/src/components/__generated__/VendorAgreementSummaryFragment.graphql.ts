/**
 * @generated SignedSource<<183ee901e931aba92421e65b779f7cf9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type VendorAgreementSummaryFragment$data = {
  readonly label: string | null;
  readonly name: string;
  readonly totalCost: string | null;
  readonly " $fragmentType": "VendorAgreementSummaryFragment";
};
export type VendorAgreementSummaryFragment$key = {
  readonly " $data"?: VendorAgreementSummaryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"VendorAgreementSummaryFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "VendorAgreementSummaryFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalCost",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "label",
      "storageKey": null
    }
  ],
  "type": "VendorAgreementField",
  "abstractKey": null
};

(node as any).hash = "b394f3fcfdb89e2644f7683b9e857241";

export default node;
