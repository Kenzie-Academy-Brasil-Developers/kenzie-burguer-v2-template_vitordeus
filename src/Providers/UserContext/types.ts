export interface IDefaultProviderProps{
  children: React.ReactNode;
}

export interface IUser{
  email: string;
  name: string;
  id: number;
}

export interface IRegisterFormValues{
  email:string;
  password: string;
  name: string;
}

export interface IRegisterInputValues{
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface  ILoginFormValues{
  email: string;
  password: string;
}

export interface IProductsFormValues{
  toLowerCase(): string;
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface IProductProps{
  product: IProductsFormValues
}

export interface IUserRegisterResponseValues {
  accessToken: string
  user: IUserRegisterResponseValuesUser
}

export interface IUserRegisterResponseValuesUser {
  email: string
  name: string
  id: number
}

export interface IUserContext{
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | null;
  // setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  products: IProductsFormValues[];
  userRegister: (formData: IRegisterFormValues) => Promise<void>;
  userLogin: (formData: ILoginFormValues) => Promise<void>;
  userLogout: () => Promise<void>;
  setFilteredProducts: React.Dispatch<React.SetStateAction<string | IProductsFormValues>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchProductsList: IProductsFormValues[];
  clearSearch: () => void;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}