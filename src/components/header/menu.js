import React from 'react';
import glamorous from 'glamorous';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Menu, MenuItem, MenuDivider, Classes } from '@blueprintjs/core';

const HeaderContainMenu = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
});

const HeaderMenu = ({ blockedAction }) => {
  return (
    <HeaderContainMenu>
      <Menu>
        <MenuItem className={cx(Classes.BUTTON, Classes.ACTIVE)} iconName="link" text="Mission" />
        <MenuItem
          className={cx(Classes.BUTTON)}
          iconName="link"
          text="Shall Not Pass"
          onClick={() => blockedAction('Shall Not Pass')}
        />
        <MenuDivider />
      </Menu>
    </HeaderContainMenu>
  );
};

HeaderMenu.propTypes = {
  blockedAction: PropTypes.func.isRequired,
};

export default HeaderMenu;
