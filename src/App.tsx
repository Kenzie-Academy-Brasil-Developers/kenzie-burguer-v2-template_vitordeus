import { ToastContainer } from 'react-toastify';
import Router from './routes';
import { GlobalStyles } from './styles/global';
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from './Providers/UserContext/UserContext';
import { CartProvider } from './Providers/CartContext/CartContext';

const App = () => (
  <UserProvider>
    <CartProvider>
      <GlobalStyles />
      <Router />
      <ToastContainer
          position='top-right'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme='colored'
        />
    </CartProvider>
  </UserProvider>
);

export default App;
