import Button from "react-bootstrap/Button";
import CardBS from "react-bootstrap/Card";
import Star from "./Star";
import styles from "./css/cardProduct.module.css";
import { useAppContext } from "../App";

const Card = ({ items }) => {
  const value = useAppContext();
  const handleClick = (value) => {
    value.setCartQtd(value.cartQtd + 1);
  };
  return (
    <CardBS style={{ width: "18rem" }} className={styles.cardWrapper}>
      <CardBS.Img variant="top" src={items.image} />
      <CardBS.Body>
        {items.color.map((e, index) => (
          <Star key={index} color={e} />
        ))}
        <CardBS.Text className={styles.cardText}>{items.text}</CardBS.Text>
        <h3 className={styles.cardTitle}>${items.price}</h3>
        <Button
          className={styles.cardButton}
          onClick={() => handleClick(value)}
        >
          Add to cart
        </Button>
      </CardBS.Body>
    </CardBS>
  );
};

export default Card;
