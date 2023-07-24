import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products"
import Cart from "./components/pages/Cart"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="My products" element={<Products />} />
          <Route path="My purchases" element={<Cart />} />
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
