import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { deleteItemFromCart } from '../../redux/cart/reducer';
import './orderItem.scss'
import { Game } from '../../constants/interfaces';

export const OrderItem: React.FC<{game: Game}> = ({ game }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = (event: any) => {
    event.stopPropagation();
    dispatch(deleteItemFromCart(game.id));
  }

  return (
    <div className="order-item">
      <div className="order-item__cover">
        <div className="game-cover"
          style={{ backgroundImage: `url(${game.image})` }}/>
      </div>
      <div className="order-item__title">
          <span> {game.title} </span>
      </div>
      <div className="order-item__price">
          <span>{game.price} грн.</span>
          <AiOutlineCloseCircle
            size={25}
            className="cart-item__delete-icon"
            onClick={handleDeleteClick}
          />
      </div>
    </div>
  )
}
