/**
 * @generated SignedSource<<37bda981569cf4105f6746c8f7e21e18>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppLogoFragment$data = {
  readonly logoUrl: string | null;
  readonly name: string;
  readonly " $fragmentType": "AppLogoFragment";
};
export type AppLogoFragment$key = {
  readonly " $data"?: AppLogoFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppLogoFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppLogoFragment",
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
      "name": "logoUrl",
      "storageKey": null
    }
  ],
  "type": "AppFieldWithoutSensitiveData",
  "abstractKey": null
};

(node as any).hash = "e3455e007cb674fd0d4b5c6b9310a775";

export default node;
