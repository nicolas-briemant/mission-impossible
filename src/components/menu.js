import React from 'react';
import { ButtonGroup, Button } from "@blueprintjs/core";

export default () => (
  <ButtonGroup minimal>
    <Button iconName="shopping-cart">Missions</Button>
    <Button iconName="people" disabled>People</Button>
  </ButtonGroup>
);
