import { useContext } from 'react';
import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import { StyledContainer } from '../../styles/grid';
import { CartContext } from '../../Providers/CartContext/CartContext';
import { UserContext } from '../../Providers/UserContext/UserContext';

const ShopPage = () => {
  const { showModal } = useContext(CartContext);
  const { darkMode } = useContext(UserContext);

  return (
    <StyledShopPage>
      {showModal ? <CartModal /> : null}
      <Header />
      <main id={darkMode ? "dark" : ""}>
        <StyledContainer containerWidth={1300}>
          <ProductList />
        </StyledContainer>
      </main>
    </StyledShopPage>
  );
};

export default ShopPage;
