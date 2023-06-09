import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { BiCartAlt } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

import { calcTotalPrice } from '../../constants/utils';
import { CartMenu } from '../index'
import './cartBlock.scss';

export const CartBlock = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const items = useSelector((state: any) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    setIsCartVisible(false);
    navigate('/order');
  }, [navigate])

  return (
    <div className='cart'>
      {
        items.length > 0 ? (
          <div className="items-in-cart">
              { items.length }
          </div>
        ) : null
      }
      <BiCartAlt size={25} className='cart' onClick={() => setIsCartVisible(!isCartVisible)} />
      { totalPrice > 0 ? <span className='cart__price'>{totalPrice} грн</span> : null }
      { isCartVisible && <CartMenu items={items} onClick={handleClick}/>}
    </div>
  )
}
