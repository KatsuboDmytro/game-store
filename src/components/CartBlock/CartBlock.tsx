import React from 'react';
import { BiCartAlt } from 'react-icons/bi';
import './cartBlock.scss';

export const CartBlock = () => {
  return (
    <div className='cart'>
      <BiCartAlt size={25} className='cart' />
      <span className='cart__price'>0.00 грн</span>
    </div>
  )
}
