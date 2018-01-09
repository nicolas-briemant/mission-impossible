import React from 'react';
import glamorous from 'glamorous';
import { Menu, MenuItem, MenuDivider } from '@blueprintjs/core';

const HeaderContainMenu = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
});

const HeaderMenu = () => {
  return (
    <HeaderContainMenu>
      <Menu>
        <MenuItem iconName="link" text="Mission" />
        <MenuItem iconName="link" text="Soon" />
        <MenuDivider />
      </Menu>
    </HeaderContainMenu>
  );
};

export default HeaderMenu;
