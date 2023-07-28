import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import AppContext from "./store/AppContext";
import {
  getAllProduct,
  getCartProduct,
  saveCartProduct,
} from "./services/ProductService";

import Image1 from "./images/product_1.jpg";
import Image8 from "./images/product_8.jpg";
function App() {
  const allProducts = [
    {
      id: 8,
      image: Image8,
      text: "New LCDScreen and HD Vide..",
      price: 320,
      color: ["#fa4251", "#fa4251", "#fa4251", "#fa4251", "#fffff"],
    },
  ];

  const allCartProducts = [
    {
      id: 1,
      image: Image1,
      text: "New LCDScreen and HD Vide..",
      price: 120,
      color: ["#fa4251", "#fa4251", "#fa4251", "#fa4251", "#fffff"],
      qtd: 1,
    },
  ];
  useEffect(() => {
    /* allProducts = getAllProduct(); */
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <AppContext allProducts={allProducts} allCartProducts={allCartProducts}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="my_purchases" element={<Cart />} />
          </Routes>
        </AppContext>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
