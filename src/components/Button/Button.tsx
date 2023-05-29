import React, { MouseEvent, ReactNode } from 'react';
import classNames from 'classnames'

interface ButtonProps {
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    type: 'primary' | 'secondary';
    children: ReactNode;
    size?: 's' | 'm';
}
  
export const Button: React.FC<ButtonProps> = ({
    onClick,
    type,
    children,
    size = 's'
    }) => {
    const btnClass = classNames({
        'btn': true,
        'btn--secondary': type === 'secondary',
        'btn--primary': type === 'primary',
        'btn--small': size === 's',
        'btn--medium': size === 'm',
    });

    return (
        <button className={ btnClass } onClick={ onClick }>
            { children }
        </button>
    )
}