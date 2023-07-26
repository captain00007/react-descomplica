import CardBS from "react-bootstrap/Card";
import Icon from "./Icon";
import styles from "./css/card.module.css";

const Card = ({ items, width = "auto", icon=false }) => {
  return (
    <CardBS style={{ width: width }} className={styles.cardWrapper}>
      <CardBS.Img variant="top" src={items.image} />
      <CardBS.Body className={styles.cardBody}>
        <CardBS.Title className={styles.cardTitle}>{items.title}</CardBS.Title>
        <CardBS.Text className={styles.cardText}>{items.text}</CardBS.Text>
        {icon && <Icon />}
      </CardBS.Body>
    </CardBS>
  );
};

export default Card;
