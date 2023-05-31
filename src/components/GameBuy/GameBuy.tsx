import React from 'react'
import { setItemInCart } from '../../redux/cart/reducer';
import { useDispatch } from 'react-redux';
import { Button } from '../Button/Button';

interface game {
    price: number;
}

export const GameBuy: React.FC<{ game: game }> = ({ game }) => {
  const dispatch = useDispatch();

  const handleClick = (event: any) => {
    event.stopPropagation();
    dispatch(setItemInCart(game));
  }

  return (
    <>
      <span className="game-buy__price">{game.price} грн.</span>
      <Button 
      type={"primary" } 
      onClick={ handleClick }>
        {"До кошика"}
      </Button>
    </>
  )
}
