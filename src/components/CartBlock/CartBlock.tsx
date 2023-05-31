import { useSelector } from 'react-redux';
import { BiCartAlt } from 'react-icons/bi';
import { calcTotalPrice } from '../../constants/utils';
import { CartMenu } from '../CartMenu/CartMenu'
import './cartBlock.scss';

export const CartBlock = () => {
  
  const items = useSelector((state: any) => state.cart.itemsInCart);

  return (
    <div className='cart'>
      <BiCartAlt size={25} className='cart' />
      <span className='cart__price'>{calcTotalPrice(items)} грн</span>
    </div>
  )
}
