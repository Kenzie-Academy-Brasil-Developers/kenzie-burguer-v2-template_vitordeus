import { MdDelete } from 'react-icons/md';
import { useContext } from 'react';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { CartContext } from '../../../../Providers/CartContext/CartContext';
import { IProductCartProps } from '../../../../Providers/CartContext/types';

const CartProductCard = ({ product }: IProductCartProps) => {
  const { addProductToCart, rmvProductFromCart, rmvAllOfTheSameProduct } =
    useContext(CartContext);

  return (
    <StyledCartProductCard>
      <div className='imageBox'>
        <img src={product.img} alt={product.name} />
      </div>
      <div className='contentBox'>
        <div className='nameBox'>
          <StyledTitle tag='h3' $fontSize='three'>
            {product.name}
          </StyledTitle>
          <div className='quantityBox'>
            <button
              type='button'
              aria-label='Adicionar unidade'
              onClick={() => addProductToCart({ product })}
            >
              +
            </button>
            <span>{product.qty}</span>
            <button
              type='button'
              aria-label='Remover unidade'
              onClick={() => rmvProductFromCart({ product })}
            >
              -
            </button>
          </div>
        </div>
        <button
          type='button'
          aria-label='Remover'
          onClick={() => rmvAllOfTheSameProduct(product.id)}
        >
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
