import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import Footer from "./components/Footer";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);
function App() {
  const [cartQtd, setCartQtd] = useState(0);
  return (
    <BrowserRouter>
      <div className="App">
        <AppContext.Provider value={{ cartQtd, setCartQtd }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="my_purchases" element={<Cart />} />
          </Routes>
        </AppContext.Provider>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
