import React from 'react';
import classNames from 'classnames';

import { ButtonProps } from '../../constants/interfaces'

export const Button: React.FC<ButtonProps> = ({
  onClick,
  type,
  children,
  size = 's',
  btnColor,
}) => {
  const btnClass = classNames({
    'btn': true,
    'btn--secondary': type === 'secondary',
    'btn--primary': type === 'primary',
    'btn--small': size === 's',
    'btn--medium': size === 'm',
  });

  return (
    <button className={btnClass} onClick={onClick} style={{ backgroundColor: btnColor }}>
      {children}
    </button>
  );
};
