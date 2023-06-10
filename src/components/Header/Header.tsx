import { Link } from 'react-router-dom'
import { CartBlock } from '../index'
import './header.scss'

export const Header = () => {
  return (
    <div className='header'>
        <div className="wrapper">
            <Link to={'/'} className='header__shop-title'>Game Shop</Link>
            <div className="wrapper header__cart-btn-wrapper">
                <CartBlock />
            </div>
        </div>
    </div>
  )
}
