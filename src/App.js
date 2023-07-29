import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Team from "./pages/Team";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import AppContext from "./store/AppContext";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="my_products" element={<Products />} />
            <Route path="about" element={<About />} />
            <Route path="team" element={<Team />} />
            <Route path="my_purchases" element={<Cart />} />
          </Routes>
        </AppContext>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
