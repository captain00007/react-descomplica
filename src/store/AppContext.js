import { useState, createContext, useContext } from "react";
import { useEffect, useReducer } from "react";
import {
  getAllProduct,
  getCartProduct,
  saveCartProduct,
} from "../services/ProductService";

const allCartProducts = getCartProduct();

const reducer = (state, action) => {
  return state;
};

const catReducer = (state, action) => {
  switch (action.type) {
    case "remove":
      return state.map((e) => {
        if (e.id !== action.id) {
          return { ...e};
        } 
      });
    case "qtdPlus":
      return state.map((e) => {
        if (e.id === action.id) {
          return { ...e, qtd: e.qtd + 1 };
        } else {
          return e;
        }
      });
    case "qtdMinus":
      return state.map((e) => {
        if (e.id === action.id) {
          return { ...e, qtd: e.qtd - 1 };
        } else {
          return e;
        }
      });
    default:
      return state;
  }
};

const Context = createContext();
export const useAppContext = () => useContext(Context);

const AppContext = ({ children, allProducts, allCartProducts }) => {
  const [cartQtd, setCartQtd] = useState(0);

  const [products, dispatch] = useReducer(reducer, allProducts);
  const [catProducts, catDispatch] = useReducer(catReducer, allCartProducts);

  return (
    <Context.Provider value={{ products, catProducts, catDispatch, cartQtd, setCartQtd }}>
      {children}
    </Context.Provider>
  );
};

export default AppContext;
