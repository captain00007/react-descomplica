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

/* const allCartProducts = [
  {
    id: 1,
    image: Image7,
    text: "New LCDScreen and HD Vide..",
    price: 120,
    color: ["#fa4251", "#fa4251", "#fa4251", "#fa4251", "#fffff"],
    qtd: 1,
  },
  {
    id: 8,
    image: Image8,
    text: "New LCDScreen and HD Vide..",
    price: 320,
    color: ["#fa4251", "#fa4251", "#fa4251", "#fa4251", "#fffff"],
    qtd: 1,
  },
];

localStorage.setItem("products", JSON.stringify(allCartProducts)) */

const Context = createContext();
export const useAppContext = () => useContext(Context);

const AppContext = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [catProducts, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    setAllProducts(getAllProduct());
    dispatch({ type: "setProduct", payload: getCartProduct() });
  }, []);

  return (
    <Context.Provider
      value={{ allProducts, catProducts, dispatch }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
