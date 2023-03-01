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
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [products, setProducts] = useState<IProductsFormValues[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<
    IProductsFormValues | string | ''
  >('');
  const [searchValue, setSearchValue] = useState('');

  const searchProductsList = products.filter((product) =>
    filteredProducts === ''
      ? true
      : product.name.toLowerCase().includes(filteredProducts.toLowerCase()) ||
        product.category.toLowerCase().includes(filteredProducts.toLowerCase())
  );

  const navigate = useNavigate();

  const userLoad = async () => {
    const token = localStorage.getItem('@kenziebook:@TOKEN');
    if (token === null) {
      navigate('/');
    }
    try {
      const response = await api.get<IProductsFormValues[]>('/products', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data);
      navigate('/shop');
    } catch (error) {
      if(axios.isAxiosError(error)){
        toast.error(error.message)
      };
      localStorage.removeItem('@kenziebook:@TOKEN');
    }
  };

  useEffect(() => {
    userLoad();
  }, []);

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
        toast.error(error.message);
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
        toast.error(error.message);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
