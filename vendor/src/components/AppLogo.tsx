import * as React from "react";
import { graphql } from "relay-runtime";
import { AppLogoFragment$key } from "./__generated__/AppLogoFragment.graphql";
import { useFragment } from "react-relay";

const AppLogoFragment = graphql`
  fragment AppLogoFragment on AppFieldWithoutSensitiveData {
    name
    logoUrl
  }
`;

type Props = {
  appLogo: AppLogoFragment$key;
};

export function AppLogo({ appLogo }: Props) {
  const data = useFragment(AppLogoFragment, appLogo);

  return (
    <div
      style={{
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        overflow: "hidden",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        alt={data.name}
        src={data.logoUrl ?? undefined}
      />
    </div>
  );
}
