import React from 'react'
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer';
import { useDispatch, useSelector } from 'react-redux';

import { game } from '../../constants/interfaces'
import { Button } from '../index';

export const GameBuy: React.FC<{ game: game }> = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.cart.itemsInCart);
  const isItemInCart = items.some((item: any) => item.id === game.id);

  const handleClick = (event: any) => {
    event.stopPropagation();
    if(isItemInCart){
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  }

  return (
    <>
      <span className="game-buy__price">{game.price} грн.</span>
      <Button 
      type={"primary" } 
      onClick={ handleClick }
      btnColor={isItemInCart ? 'rgb(33, 169, 24)' : 'rgb(85, 88, 237)'}>
        {isItemInCart ? "У кошику" : "До кошика"}
      </Button>
    </>
  )
}
