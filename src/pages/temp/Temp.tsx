import { TempContainer } from './Temp.style';

export default function Temp() {
  return (
    <TempContainer>
      <h1>Currently updating AWS environment</h1>
      <p>Screenshots of website below:</p>
      <p>Home page:</p>
      <img src="/Home.PNG" alt="home-page" />
      <p>Menu page:</p>
      <img src="/Menu.PNG" alt="menu-page" />
      <p>Cart page:</p>
      <img src="/Cart.PNG" alt="cart-page" />
      <p>Checkout page:</p>
      <img src="/Checkout.PNG" alt="checkout-page" />
    </TempContainer>
  );
}
