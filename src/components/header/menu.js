import React from 'react';
import glamorous from 'glamorous';
import cx from 'classnames';
import { Menu, MenuItem, MenuDivider, Classes } from '@blueprintjs/core';

const HeaderContainMenu = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
});

const HeaderMenu = () => {
  return (
    <HeaderContainMenu>
      <Menu>
        <MenuItem className={cx(Classes.ACTIVE, Classes.BUTTON)} iconName="link" text="Mission" />
        <MenuItem className={cx(Classes.DISABLE)} iconName="link" text="Soon" />
        <MenuDivider />
      </Menu>
    </HeaderContainMenu>
  );
};

export default HeaderMenu;
