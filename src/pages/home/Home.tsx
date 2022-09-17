import React from "react";
import { withLayout } from "../../components/layout/Layout";

function Home(): JSX.Element {
  return (
    <div>
      <h1>h1</h1>

      <h2>h2</h2>
      <p>ppp</p>
    </div>
  );
}

export default withLayout(Home);
