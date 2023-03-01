import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ICartContext, IProductCartProps, IProductsCartValues } from './types';
import { IDefaultProviderProps } from '../UserContext/types';

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: IDefaultProviderProps) => {
  const localStorageCart = localStorage.getItem('@kenzie:CartHamburgueria');

  const [showModal, setShowModal] = useState(false);
  
  const [cart, setCart] = useState<IProductsCartValues[]>(
    localStorageCart ? JSON.parse(localStorageCart) : []
  );

  useEffect(() => {
    localStorage.setItem('@kenzie:CartHamburgueria', JSON.stringify(cart));
  }, [cart]);
  
  const addProductToCart = ({ product }: IProductCartProps) => {
    if (!cart.some((p) => product.id === p.id)) {
      const newProduct = { ...product, qty: 1 };
      setCart([...cart, newProduct]);
      toast.success('Produto adicionado')
    } else {
      const newList = cart.map((p) => {
        if (product.id === p.id && p.qty !== undefined) {
          return { ...p, qty: p.qty + 1}
        } 
          return p;
      });
      setCart(newList)
      toast.success('Produto adicionado')
    }
  };

  const rmvProductFromCart = ({product}: IProductCartProps) => {
    if(product.qty !== undefined){
      if ( product.qty === 1 ) {
        const newCart = cart.filter((productFiltered) => productFiltered.id !== product.id);
        setCart(newCart)
        toast.warning('Produto removido')
      } else {
        const newList = cart.map((productMaped) => {
          if (product.id === productMaped.id && productMaped.qty !== undefined){
            return { ...productMaped, qty: productMaped.qty - 1}
          }
          return productMaped;
        }
        )
        setCart(newList)
        toast.warning('Produto removido')
      }
    } return("")
  };

  const removeAllFromCart = () => {
    const newCart:IProductsCartValues[] = [];
    setCart(newCart);
    toast.warning("Sacola pronta para recomeçar")
  };

  const rmvAllOfTheSameProduct = (id: number) => {
    const newCart = cart.filter((product) => product.id !== id);
    toast.warning('Produto(s) removido(s)')
    setCart(newCart);
  }

  return (
    <CartContext.Provider 
      value={{ 
        showModal, 
        setShowModal, 
        cart,
        addProductToCart, 
        rmvProductFromCart, 
        removeAllFromCart,
        rmvAllOfTheSameProduct,
      }}>
          {children}
    </CartContext.Provider>
  );
};
