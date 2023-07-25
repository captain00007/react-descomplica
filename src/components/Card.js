import CardBS from "react-bootstrap/Card";
import styles from "./css/card.module.css";

const Card = ({ items }) => {
  return (
    <CardBS className={styles.cardAboutWrapper}>
      <CardBS.Img variant="top" src={items.image} />
      <CardBS.Body className={styles.cardBody}>
        <CardBS.Title className={styles.cardTitle}>{items.title}</CardBS.Title>
        <CardBS.Text className={styles.cardText}>{items.text}</CardBS.Text>
      </CardBS.Body>
    </CardBS>
  );
};

export default Card;
