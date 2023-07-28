import Image1 from "../images/product_1.jpg";
import Image2 from "../images/product_2.jpg";
import Image3 from "../images/product_3.jpg";
import Image4 from "../images/product_4.jpg";
import Image5 from "../images/product_5.jpg";
import Image6 from "../images/product_6.jpg";
import Image7 from "../images/product_7.jpg";
import Image8 from "../images/product_8.jpg";

const allProducts = [
  {
    id: 1,
    image: Image1,
    text: "New LCDScreen and HD Vide..",
    price: 120,
    color: ["#fa4251", "#fa4251", "#fa4251", "#fa4251", "#fffff"],
  },
  {
    id: 2,
    image: Image2,
    text: "New LCDScreen and HD Vide..",
    price: 220,
    color: ["#fa4251", "#fa4251", "#fa4251", "#fa4251", "#fffff"],
  },
  {
    id: 3,
    image: Image3,
    text: "New LCDScreen and HD Vide..",
    price: 450,
    color: ["#fa4251", "#fa4251", "#fa4251", "#fa4251", "#fffff"],
  },
  {
    id: 4,
    image: Image4,
    text: "New LCDScreen and HD Vide..",
    price: 320,
    color: ["#fa4251", "#fa4251", "#fa4251", "#fa4251", "#fffff"],
  },
  {
    id: 5,
    image: Image5,
    text: "New LCDScreen and HD Vide..",
    price: 520,
    color: ["#fa4251", "#fa4251", "#fa4251", "#fa4251", "#fffff"],
  },
  {
    id: 6,
    image: Image6,
    text: "New LCDScreen and HD Vide..",
    price: 320,
    color: ["#fa4251", "#fa4251", "#fa4251", "#fa4251", "#fffff"],
  },
  {
    id: 7,
    image: Image7,
    text: "New LCDScreen and HD Vide..",
    price: 320,
    color: ["#fa4251", "#fa4251", "#fa4251", "#fa4251", "#fffff"],
  },
  {
    id: 8,
    image: Image8,
    text: "New LCDScreen and HD Vide..",
    price: 320,
    color: ["#fa4251", "#fa4251", "#fa4251", "#fa4251", "#fffff"],
  },
];

export const saveCartProduct = async (product) => {
  const products = await getCartProduct();
  const newProduct = {
    id: 1,
    image: product.image,
    text: product.text,
    price: product.price,
    color: [...product.color],
    qtd: product.qtd,
  };
  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));
};

export const getCartProduct = async () => {
  return JSON.parse(localStorage.getItem("products")) || [];
};

export const getAllProduct = () => {
  return (allProducts || []);
};
