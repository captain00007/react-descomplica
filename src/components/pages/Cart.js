import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../css/cart.module.css"

const Cart = () => {
  return (
    <Container className={styles.cartWrapper}>
      <h1>My purchases</h1>
    </Container>
  );
};

export default Cart;
