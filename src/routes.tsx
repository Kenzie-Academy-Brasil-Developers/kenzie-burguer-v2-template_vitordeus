import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';
import { CartProvider } from './Providers/CartContext/CartContext';
import OpenRotes from './pages/OpenRotes'

const Router = () => (
    <Routes>
      <Route path='/' element={<OpenRotes />}>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>
      <Route path='/shop' element={
        <CartProvider >
          <ShopPage/>
        </CartProvider>
      } />
    </Routes>
  );

export default Router;
