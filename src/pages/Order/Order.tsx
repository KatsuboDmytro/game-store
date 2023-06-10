import React from 'react'
import { useSelector } from 'react-redux'

import { calcTotalPrice, enumerate } from '../../constants/utils'
import { OrderItem } from '../../components'
import './order.scss'

export const Order = () => {
  const items = useSelector((state: any) => state.cart.itemsInCart)

  if(items.length < 1) {
    return <h3>У корзині нічого нема &lt;(-_-)&gt;</h3>
  }

  return (
    <div className="order-page">
      <div className="order-page__left">
        { items.map((game: any) => <OrderItem key={game.id} game={game}/>)}
      </div>
      <div className="order-page__right">
        <div className="order-page__total-price">
          <span>{ items.length } {enumerate(items.length, ['товар', 'товара', 'товаров'])} на суму {calcTotalPrice(items)} грн.</span>
        </div>
      </div>
    </div>
  )
}
