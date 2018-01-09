import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { css } from 'glamor';

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
  animation: `${anim} 5s infinite linear`,
});

const HeaderContainTitle = glamorous.div({
  position: 'relative',
});

const HeaderTitle = glamorous.h1({
  position: 'absolute',
  fontSize: '20px',
  top: '-38px',
  right: '-187px',
});

const Logo = ({ src, alt, title }) => {
  return (
    <div>
      <HeaderLogoImg src={src} alt={alt} />
      <HeaderContainTitle>
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderContainTitle>
    </div>
  );
};

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Logo;
