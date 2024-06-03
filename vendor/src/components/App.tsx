import * as React from "react";
import RelayEnvironment from "../relay/RelayEnvironment";
import LoadingSpinner from "./LoadingSpinner";
import { Vendor } from "./Vendor";

export default function App(): React.ReactElement {
  return (
    <RelayEnvironment>
      <React.Suspense fallback={<LoadingSpinner />}>
        <div className="app">
          <Vendor />
        </div>
      </React.Suspense>
    </RelayEnvironment>
  );
}
