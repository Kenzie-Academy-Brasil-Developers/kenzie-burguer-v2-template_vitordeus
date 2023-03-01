export interface ICartContext{
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  cart: IProductsCartValues[];
  addProductToCart: ({ product }: IProductCartProps) => void;
  rmvProductFromCart: ({ product }: IProductCartProps) => void;
  removeAllFromCart: () => void;
  rmvAllOfTheSameProduct: (id: number) => void;
}

export interface IProductsCartValues{
  toLowerCase(): string;
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  qty?: number;
}


export interface IProductCartProps{
  product: IProductsCartValues
}