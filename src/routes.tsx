import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';
import OpenRotes from './pages/OpenRotes'
import ProtectedRotes from './pages/ProtectedRotes';

const Router = () => (
    <Routes>
      <Route element={<OpenRotes />}>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>
      <Route element={<ProtectedRotes />}>
        <Route path='/shop' element={
            <ShopPage/>
            } />
        </Route>
    </Routes>
  );

export default Router;
