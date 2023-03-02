import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios, { isAxiosError } from 'axios';
import {
  IUserContext,
  IDefaultProviderProps,
  IUser,
  IProductsFormValues,
  IRegisterFormValues,
  ILoginFormValues,
  IUserRegisterResponseValues,
} from './types';
import { api } from '../../services/api';

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const navigate = useNavigate();
  const localStorageDarkMode = localStorage.getItem(
    "@kenzie:hamburgueriaDarkMode"
    );
    
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<IUser | null>(null);
    const [products, setProducts] = useState<IProductsFormValues[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<
  IProductsFormValues | string | ''
  >('');
  const [searchValue, setSearchValue] = useState('');
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorageDarkMode ? JSON.parse(localStorageDarkMode) : "false"
    );
  const token = localStorage.getItem('@kenziebook:@TOKEN');

  const searchProductsList = products.filter((product) =>
    filteredProducts === ''
      ? true
      : product.name.toLowerCase().includes(filteredProducts.toLowerCase()) ||
        product.category.toLowerCase().includes(filteredProducts.toLowerCase())
  );



  useEffect(() => {
    const userLoad = async () => {
      try {
        const response = await api.get('/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        localStorage.removeItem('@kenziebook:@TOKEN');
        navigate('/');
      }
    };
    userLoad()
  },[])

  const userRegister = async (formData: IRegisterFormValues) => {
    try {
      setLoading(true);
      const response = await api.post<IUserRegisterResponseValues>(
        '/users',
        formData
      );
      setUser(response.data.user);
      localStorage.setItem('@kenziebook:@TOKEN', response.data.accessToken);
      toast.success('Cadastro realizado com sucesso!');
      navigate('/shop');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error('Este e-mail já está cadastrado');
      }
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (formData: ILoginFormValues) => {
    try {
      setLoading(true);
      const response = await api.post<IUserRegisterResponseValues>(
        '/login',
        formData
      );
      setUser(response.data.user);
      localStorage.setItem('@kenziebook:@TOKEN', response.data.accessToken);
      toast.success('Login realizado com sucesso!');
      navigate('/shop');
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error("Login ou senha incorretos!");
      }
    } finally {
      setLoading(false);
    }
  };

  const userLogout = async () => {
    setUser(null);
    localStorage.removeItem('@kenziebook:@TOKEN');
    toast.success('Usuário deslogado');
    navigate('/');
  };

  const clearSearch = () => {
    const cleanSearch = "";
    setFilteredProducts(cleanSearch);
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        user,
        products,
        userRegister,
        userLogin,
        userLogout,
        setFilteredProducts,
        searchValue,
        setSearchValue,
        searchProductsList,
        clearSearch,
        darkMode, 
        setDarkMode
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
