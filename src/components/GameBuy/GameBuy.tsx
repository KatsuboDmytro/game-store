import React from 'react'
import { Button } from '../Button/Button';

interface game {
    price: number;
}

export const GameBuy: React.FC<{ game: game }> = ({ game }) => {
  return (
    <>
      <span className="game-buy__price">{game.price} грн.</span>
      <Button type={"primary" } onClick={() => null}>
        {"До кошика"}
      </Button>
    </>
  )
}
