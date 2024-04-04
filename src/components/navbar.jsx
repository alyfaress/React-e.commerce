
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>

        <div className='links'/*"to" is used in link to tell it where to go when pressed */>
            <Link to="/"/*l is capital*/>Shop</Link>
            <Link to="/cart"><ShoppingCart size={32}/></Link>
        </div>
    </div>
  )
}
