import CardBS from "react-bootstrap/Card";
import Star from "./Star";
import styles from "./css/cardProduct.module.css";
import { useAppContext } from "../store/AppContext";
import Button from "./Button";

const Card = ({ item, setShowNotif, cart = false, width }) => {
  const value = useAppContext();
  
  const handleClick = (item,setDisable) => {
    setShowNotif(true);
    const newItem = {...item, qtd: 1}
    value.dispatch({ type: "setNewProduct", payload: newItem });
    setDisable(true);
  };

  return (
    <CardBS style={{ width: width }} className={styles.cardWrapper}>
      <CardBS.Img variant="top" src={item.image} />
      <CardBS.Body>
        {item.color.map((e, index) => (
          <Star key={index} color={e} />
        ))}
        <CardBS.Text className={styles.cardText}>{item.text}</CardBS.Text>
        {!cart && (
          <>
            <h3 className={styles.cardTitle}>${item.price}</h3>

            <Button handleClick={handleClick} item={item} ></Button>
          </>
        )}
      </CardBS.Body>
    </CardBS>
  );
};

export default Card;
