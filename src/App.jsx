import { useEffect } from 'react';
import { CartContextProvider } from './store/CartContext';
import { UserProgressContextProvider } from './store/UserProgressContext';

// components
import Header from './components/Header';
import Meals from './components/Meals';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  useEffect(() => {
    fetch('http://localhost:3000/meals')
      .then((res) => res.json())
      .then(console.log);
  }, []);

  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
