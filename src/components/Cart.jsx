import { useContext } from 'react';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

// components
import Modal from './ui/Modal';
import Button from './ui/Button';

// extras
import { currencyFormatter } from '../utils/formatting';

function Cart() {
  const { items } = useContext(CartContext);
  const { progress, hideCart } = useContext(UserProgressContext);

  const cartTotal = items.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);

  function handleCloseCart() {
    hideCart();
  }

  return (
    <Modal className='cart' open={progress === 'cart'}>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <p className='cart-total'>{currencyFormatter.format(cartTotal)}</p>
      <p className='modal-actions'>
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        <Button onClick={handleCloseCart}>Go to Checkout</Button>
      </p>
    </Modal>
  );
}

export default Cart;
