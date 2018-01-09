import React from 'react';
import glamorous from 'glamorous';
import { Menu, MenuItem } from '@blueprintjs/core';
import 'normalize.css/normalize.css';
import '@blueprintjs/core/dist/blueprint.css';

const StyleMenu = glamorous(Menu)({
  display: 'flex',
});

export default () => (
  <StyleMenu>
    <MenuItem iconName="arrow-right" text="Missions" />
    <MenuItem iconName="people" text="People" />
  </StyleMenu>
);
