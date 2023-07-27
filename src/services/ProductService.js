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
