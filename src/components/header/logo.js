import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { css } from 'glamor';

const HeaderContainLogoAndTitle = glamorous.div({
  display: 'flex',
  alignItems: 'center',
});

const anim = css.keyframes({
  '0%': { transform: 'rotateY(0deg)' },
  '25%': { transform: 'rotateY(90deg)' },
  '50%': { transform: 'rotateY(180deg)' },
  '75%': { transform: 'rotateY(270deg)' },
  '100%': { transform: 'rotateY(360deg)' },
});

const HeaderLogoImg = glamorous.img({
  height: '77px',
  width: 'auto',
  backgroundColor: 'red',
  animation: `${anim} 5s infinite linear`,
});

const HeaderContainTitle = glamorous.div({
  position: 'relative',
  justifyContent: 'center',
});

const HeaderTitle = glamorous.h1({
  fontSize: '20px',
});

const Logo = ({ src, alt, title }) => {
  return (
    <HeaderContainLogoAndTitle>
      <HeaderLogoImg src={src} alt={alt} />
      <HeaderContainTitle>
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderContainTitle>
    </HeaderContainLogoAndTitle>
  );
};

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Logo;
