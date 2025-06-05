// components
import Button from './ui/Button';

function Header() {
  return (
    <header id='main-header'>
      <div id='title'>
        <img src='dummy-image' alt='A restaurant' />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart</Button>
      </nav>
    </header>
  );
}

export default Header;
