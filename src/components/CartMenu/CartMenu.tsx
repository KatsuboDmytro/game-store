import React from 'react'
import { calcTotalPrice } from '../../constants/utils'
import { Button, CartItem } from '../index';
import './cartMenu.scss';

export const CartMenu: React.FC<{ items: any, onClick: any }> = ({items, onClick}) => {
  return (
    <div className='cart-menu'>
      <div className="cart-menu__games-list">
        {items.length > 0 ? items.map((game: any) => (
          <CartItem
            key={game.image}
            price={game.price}
            title={game.title}
          />
        ))
        : "Корзина пуста"}
      </div>
      {
        items.length > 0 ?
          <div className='cart-menu__arrange'>
            <span className='cart-menu__total-price'>Загалом: {calcTotalPrice(items)} грн.</span>
            <Button type="primary" size="m" onClick={onClick} btnColor={'rgb(85, 88, 237)'}>Замовити</Button>
          </div>
        : null
      }
    </div>
  )
}
