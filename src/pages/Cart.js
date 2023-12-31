import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Card from "../components/CardProduct";
import { Link } from "react-router-dom";
import styles from "./cart.module.css";
import { useAppContext } from "../store/AppContext";
import { saveCartProduct } from "../services/ProductService";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";

const Cart = () => {
  const [showNotif, setShowNotif] = useState(false);
  const items = useAppContext();
  const cartProducts = items.catProducts;

  const handleClickMinus = (e) => {
    if (e.qtd >= 2) {
      items.dispatch({ type: "qtdMinus", payload: e.id });
    }
  };

  const handleClickPlus = (e) => {
    items.dispatch({ type: "qtdPlus", payload: e.id });
  };

  const handleClick = (e) => {
    items.dispatch({ type: "remove", payload: e.id });
    items.setButton(items.button.filter((el) => e.id !== el));
  };

  const handleClickSave = (cartProducts) => {
    saveCartProduct(cartProducts);
    setShowNotif(true);
  };

  return (
    <>
      {showNotif && (
        <Container className={styles.notificationWrapper}>
          <Alert
            variant="succes"
            onClose={() => setShowNotif(false)}
            dismissible
          >
            <p>Product purchased succesfully</p>
          </Alert>
        </Container>
      )}
      {cartProducts.length > 0 ? (
        <Container className={styles.cartWrapper}>
          <h1>My purchases</h1>
          <Row>
            {cartProducts.map((e) => (
              <Col sm={12} key={e.id}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col md={6}>
                        <Card item={e} cart={true} width="8rem" />
                      </Col>
                      <Col>
                        <p className={styles.price}>${e.price * e.qtd}</p>
                      </Col>
                      <Col>
                        <div className={styles.plusMinusWrapper}>
                          <button onClick={() => handleClickMinus(e)}>-</button>
                          <p>{e.qtd}</p>
                          <button onClick={() => handleClickPlus(e)}>+</button>
                        </div>
                      </Col>
                      <Col>
                        <button
                          className={styles.trashButton}
                          onClick={() => handleClick(e)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            ))}
          </Row>
          <Container>
            <div className={styles.subTotalWrapper}>
              <h4>Subtotal</h4>
              <h2>${items.totalPrice}</h2>
            </div>
          </Container>
          <Container className={styles.cartPurchase}>
            <div>
              <Link to="/my_products">
                <button>Continue shopping</button>
              </Link>
            </div>
            <div>
              <button onClick={() => handleClickSave(cartProducts)}>
                Check out
              </button>
            </div>
          </Container>
        </Container>
      ) : (
        <Container className={styles.emptyCart}>
          <p>Cart is empty</p>
          <Link to="/my_products">
            <button>Go to shopping</button>
          </Link>
        </Container>
      )}
    </>
  );
};

export default Cart;
