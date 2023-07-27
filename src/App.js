import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
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
            <Route path="my_purchases" element={<Cart />} />
          </Routes>
        </AppContext>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
