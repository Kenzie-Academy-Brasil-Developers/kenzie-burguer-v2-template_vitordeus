import { MdShoppingCart, MdLogout, MdLightbulbOutline } from 'react-icons/md';
import { AiOutlineClear } from "react-icons/ai";
import { useContext } from 'react';
import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import LogoKenzieBurguer from '../../assets/LogoKenzieBurguer.svg';
import { StyledContainer } from '../../styles/grid';
import { UserContext } from '../../Providers/UserContext/UserContext';
import { CartContext } from '../../Providers/CartContext/CartContext';

const Header = () => {
  const { userLogout, clearSearch, darkMode, setDarkMode } = useContext(UserContext);
  const { setShowModal } = useContext(CartContext);

  return(
  <StyledHeader>
    <StyledContainer containerWidth={1300}>
      <div className='flexGrid'>
        <img
          src={LogoKenzieBurguer}
          alt='Kenzie Burguer Logo'
          className='logo'
        />
        <nav className='nav' role='navigation'>
          <SearchForm />
          <div className='buttons'>
            <button 
              type='button' 
              onClick={() => clearSearch()} 
            >
              <AiOutlineClear size={28}/>
            </button>
            <button 
              type='button' 
              onClick={() => setDarkMode(!darkMode)}
            >
              <MdLightbulbOutline size={28}/>
            </button>
            <button
              type='button'
              onClick={() => 
                setShowModal(true)
              }
            >
              <MdShoppingCart size={28} />
            </button>
            <button type='button' onClick={() => userLogout()}>
              <MdLogout size={28} />
            </button>
          </div>
        </nav>
      </div>
    </StyledContainer>
  </StyledHeader>
  )
};

export default Header;
