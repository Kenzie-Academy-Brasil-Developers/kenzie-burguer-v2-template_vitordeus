import { ToastContainer } from 'react-toastify';
import { UserProvider } from './Providers/UserContext/UserContext';
import Router from './routes';
import { GlobalStyles } from './styles/global';
import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <>
    <GlobalStyles />
    <UserProvider>
      <Router />
    </UserProvider>
    <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
  </>
);

export default App;
