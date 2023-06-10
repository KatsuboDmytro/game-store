import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import { deleteItemFromCart } from '../../redux/cart/reducer';
import { CartItemProps } from '../../constants/interfaces'
import './cartItem.scss';


export const CartItem: React.FC<CartItemProps> = ({ id, title, price }) => {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.cart.itemsInCart);
  const isItemInCart = items.some((item: any) => item.id === id);

  const handleDelete = (event: any) => {
    event.stopPropagation();
    if(isItemInCart){
      dispatch(deleteItemFromCart(id));
    }
  }

  return (
    <div className="cart-item">
      <span>{title}</span>
      <div className="cart-item__price">
        <span>{price} грн.</span>
        <AiOutlineCloseCircle size={15} className="cart-item__delete-icon" onClick={handleDelete}/>
      </div>
    </div>
  );
};
