import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './cartItem.scss';

interface CartItemProps {
  title: string;
  price: number;
}

export const CartItem: React.FC<CartItemProps> = ({ title, price }) => {
  return (
    <div className="cart-item">
      <span>{title}</span>
      <div className="cart-item__price">
        <span>{price} грн.</span>
        <AiOutlineCloseCircle size={15} className="cart-item__delete-icon" />
      </div>
    </div>
  );
};
