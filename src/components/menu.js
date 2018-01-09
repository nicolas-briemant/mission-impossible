import React from 'react';
import { Navbar, Button, NavbarGroup } from '@blueprintjs/core';
import '@blueprintjs/core/dist/blueprint.css';

export const Menus = () => {
  return (
    <Navbar>
      <NavbarGroup align="right">
        <Button className="pt-minimal" iconName="home">
          Home
        </Button>
        <Button className="pt-minimal" iconName="document">
          Missions
        </Button>
        <Button className="pt-minimal" iconName="user" />
        <Button className="pt-minimal" iconName="notifications" />
      </NavbarGroup>
    </Navbar>
  );
};
