import { useContext } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { UserContext } from '../../Providers/UserContext/UserContext';

const ProductList = () => {
  const { searchProductsList } = useContext(UserContext);

  return (
    <StyledProductList>
      {searchProductsList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledProductList>
  );
};

export default ProductList;