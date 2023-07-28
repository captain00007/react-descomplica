import Button from "react-bootstrap/Button";
import CardBS from "react-bootstrap/Card";
import Star from "./Star";
import styles from "./css/cardProduct.module.css";
import { useAppContext } from "../store/AppContext";

const Card = ({ item, setShowNotif, cart = false }) => {
  const value = useAppContext();
  const handleClick = (value,item) => {
    value.setCartQtd(value.cartQtd + 1);
    setShowNotif(true);
    console.log(item);
    value.dispatch({ type: "setNewProduct", catProducts: item});
  };

  return (
    <CardBS style={{ width: "18rem" }} className={styles.cardWrapper}>
      <CardBS.Img variant="top" src={item.image} />
      <CardBS.Body>
        {item.color.map((e, index) => (
          <Star key={index} color={e} />
        ))}
        <CardBS.Text className={styles.cardText}>{item.text}</CardBS.Text>
        {!cart && (
          <>
            <h3 className={styles.cardTitle}>${item.price}</h3>
            <Button
              className={styles.cardButton}
              onClick={() => handleClick(value,item)}
            >
              Add to cart
            </Button>
          </>
        )}
      </CardBS.Body>
    </CardBS>
  );
};

export default Card;
