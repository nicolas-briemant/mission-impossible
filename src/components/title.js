import React from 'react';
import glamorous from 'glamorous';
import slack from './slack.png';

const StyleImage = glamorous.img({
  width: '50',
  height: '50',
});

const StyleTitle = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  color: 'white',
});

export const Title = () => {
  return (
    <StyleTitle>
      <StyleImage src={slack} />
      <h1>Mission Impossible</h1>
    </StyleTitle>
  );
};
