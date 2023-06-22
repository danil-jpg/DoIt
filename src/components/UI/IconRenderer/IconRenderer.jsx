import React from 'react';

import sprites from './sprites.svg';

export const IconRenderer = ({ id, ...props }) => {
  return (
    <svg {...props}>
      <use href={`${sprites}#${id}`} />
    </svg>
  );
};
