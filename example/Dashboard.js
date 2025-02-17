import React from "react";

import { connect } from "@dashbling/client/dashbling";
import { Dashboard } from "@dashbling/client/components";
import { Clock } from "@dashbling/client/widgets";
import { HelloWidget } from "./widgets/HelloWidget";
import { GitHubStars } from "./widgets/gitHubStars/GitHubStars";
import { CircleCiStatus } from "./widgets/circleCi/CircleCiStatus";

const DashblingGitHubStars = connect("github-stars-dashbling")(GitHubStars);
const DashblingCiStatus = connect("dashbling-ci-status")(CircleCiStatus);
const BoundHelloWidget = connect("hello")(HelloWidget);

export default props => {
  return (
    <Dashboard>
      <Clock
        tzdata={require("timezone/Europe/Amsterdam")}
        timezone="Europe/Amsterdam"
        backgroundColor="#00865A"
      />
      <BoundHelloWidget />

      <DashblingGitHubStars />
      <DashblingCiStatus />
    </Dashboard>
  );
};
