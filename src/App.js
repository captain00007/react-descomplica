import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import Footer from "./components/Footer";

function App() {
  const items = [
    {
      title: "Information",
      data: [
        "About Us",
        "Delivery Information",
        "Privacy Policy",
        "Terms & Conditions",
        "Contact Us",
      ],
    },
    {
      title: "Services",
      data: ["Returns", "Site Map", "Wish List", "My Account", "Order History"],
    },
    {
      title: "Extras",
      data: [
        "Brands",
        "Gift Certificates",
        "Affiliates",
        "Specials",
        "Newsletter",
      ],
    },
    {
      title: "Contacts",
      data: [
        "Warehouse & Offices",
        "12345 Street name, California USA",
        "(+024) 666 888",
        "yourid@domain.com",
        "www.yoursite.com",
      ],
    },
  ];
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="My purchases" element={<Cart />} />
        </Routes>
        <Footer items={items}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
