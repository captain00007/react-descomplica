import { useState, createContext, useContext } from "react";
import { useEffect, useReducer } from "react";
import { getAllProduct, getCartProduct } from "../services/ProductService";

const reducer = (state, action) => {
  switch (action.type) {
    case "remove":
      return state.map((e) => {
        console.log(e.id);
        if (e.id !== action.id) {
          return e;
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
    case "setProduct":
      return action.payload;
    case "setNewProduct":
      return [...state, action.payload];
    default:
      return state;
  }
};

const Context = createContext();
export const useAppContext = () => useContext(Context);

const AppContext = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [catProducts, dispatch] = useReducer(reducer, []);
  const [totalPrice, setTotalPrice] = useState(0);
  const [qtd, setQtd] = useState(0);

  useEffect(() => {
    setAllProducts(getAllProduct());
    dispatch({ type: "setProduct", payload: getCartProduct() });
  }, []);

  useEffect(() => {
    const qtdItems = catProducts.reduce((total, e) => {
      return total + e.qtd;
    }, 0);
    setQtd(qtdItems);

    const totalPrice = catProducts.reduce((total, e) => {
      return total + e.price * e.qtd;
    }, 0);
    setTotalPrice(totalPrice);
  }, [catProducts]);

  return (
    <Context.Provider
      value={{ allProducts, catProducts, dispatch, qtd, totalPrice }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
