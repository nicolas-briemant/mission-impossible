import React from 'react';
import { Navbar, Button, NavbarGroup } from '@blueprintjs/core';

export const Menu = () => {
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
