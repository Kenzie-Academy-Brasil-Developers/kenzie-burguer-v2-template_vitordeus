import { useContext } from 'react';
import CartProductCard from './CartProductCard';
import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext } from '../../../Providers/CartContext/CartContext';

const CartProductList = () => {
  const { cart, removeAllFromCart } = useContext(CartContext);

  const values: number[] = [];
  cart.forEach((product) => {
    const { price } = product;
    const quantity = product.qty;
    if (quantity !== undefined) {
      const newValues = quantity * price;
      values.push(newValues);
    }
  });

  const initialValue = 0;

  const sum = () =>
    values.reduce((acc: any, curr: any) => acc + curr, initialValue);

  return (
    <StyledCartProductList>
      <ul>
        {cart.map((product) => (
          <CartProductCard key={product.id} product={product} />
        ))}
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>
          R${sum().toFixed(2)}
        </StyledParagraph>
      </div>
      <StyledButton
        $buttonSize='default'
        $buttonStyle='gray'
        onClick={() => removeAllFromCart()}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
