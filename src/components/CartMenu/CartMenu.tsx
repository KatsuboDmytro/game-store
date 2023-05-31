import React from 'react'
import { Button } from '../Button/Button'
import { calcTotalPrice } from '../../constants/utils'
import { CartItem } from '../CartItem/CartItem';
import './cartMenu.scss';

export const CartMenu: React.FC<{ items: any, onClick: any }> = ({items, onClick}) => {
  return (
    <div className='cart-menu'>
        <div className="cart-menu__games-list">
            {items.length > 0 ? items.map((game: any) => (
              <CartItem
                /*key={game.image}
                image={game.image}
                price={game.price}
                title={game.title}
                id={game.id}*/
              />
            ))
          : "Корзина пуста"
          }
        </div>
        {
            items.length > 0 ?
            <div className='cart-menu__arrange'>
                <span className='cart-menu__total-price'>Загалом: {calcTotalPrice(items)} грн.</span>
                <Button type="primary" size="m" onClick={onClick}>Замовити</Button>
            </div>
            : null
        }
    </div>
  )
}
