/**
 * @generated SignedSource<<964dcb81fff8cf50dc6e5fa9c39fc538>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type VendorQuery$variables = {
  vendorId: string;
};
export type VendorQuery$data = {
  readonly vendor: {
    readonly agreements: ReadonlyArray<{
      readonly id: string;
      readonly " $fragmentSpreads": FragmentRefs<"VendorAgreementSummaryFragment">;
    } | null> | null;
    readonly app: {
      readonly " $fragmentSpreads": FragmentRefs<"AppLogoFragment">;
    } | null;
    readonly name: string;
  } | null;
};
export type VendorQuery = {
  response: VendorQuery$data;
  variables: VendorQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "vendorId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "vendorId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "VendorQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "VendorField",
        "kind": "LinkedField",
        "name": "vendor",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "AppFieldWithoutSensitiveData",
            "kind": "LinkedField",
            "name": "app",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "AppLogoFragment"
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "VendorAgreementField",
            "kind": "LinkedField",
            "name": "agreements",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "VendorAgreementSummaryFragment"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "VendorQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "VendorField",
        "kind": "LinkedField",
        "name": "vendor",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "AppFieldWithoutSensitiveData",
            "kind": "LinkedField",
            "name": "app",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "logoUrl",
                "storageKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "VendorAgreementField",
            "kind": "LinkedField",
            "name": "agreements",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v2/*: any*/),
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
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b6efb26e6ca5d060ec1238a78e1ef81d",
    "id": null,
    "metadata": {},
    "name": "VendorQuery",
    "operationKind": "query",
    "text": "query VendorQuery(\n  $vendorId: ID!\n) {\n  vendor(id: $vendorId) {\n    name\n    app {\n      ...AppLogoFragment\n      id\n    }\n    agreements {\n      id\n      ...VendorAgreementSummaryFragment\n    }\n    id\n  }\n}\n\nfragment AppLogoFragment on AppFieldWithoutSensitiveData {\n  name\n  logoUrl\n}\n\nfragment VendorAgreementSummaryFragment on VendorAgreementField {\n  name\n  totalCost\n  label\n}\n"
  }
};
})();

(node as any).hash = "3f8a34351ba2b309b843261ed3d1c22c";

export default node;
