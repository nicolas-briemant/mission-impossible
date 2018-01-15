import React from 'react';
import glamorous from 'glamorous';

const LogoHeader = glamorous.img({
  verticalAlign: 'middle',
  width: '50px',
});

export default () => (
  <LogoHeader src="https://pbs.twimg.com/profile_images/576032932810227712/V-AdqQ_j_400x400.png" alt="logo" />
);
