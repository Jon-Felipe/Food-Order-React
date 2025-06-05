import { useContext } from 'react';
import CartContext from '../store/CartContext';

// components
import Button from './ui/Button';

function Header() {
  const { items } = useContext(CartContext);

  const totalCartItems = items.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <header id='main-header'>
      <div id='title'>
        <img src='dummy-image' alt='A restaurant' />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart {totalCartItems}</Button>
      </nav>
    </header>
  );
}

export default Header;
