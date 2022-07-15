import React, { useState } from "react";
import InformationSection from "./InformationSection";
import Grid from "./GridSection";
import Text from '../components/Parg'

function Main() {
  return (
<div>
  <Text>
    <h1>What we do?</h1>
    <p>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
</p>
  </Text>
      <InformationSection />
  <Text>
    <h1>See whats happening near us</h1>
    <p>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
</p>
  </Text>
      <Grid />
    </div>
  );
}

export default Main;
