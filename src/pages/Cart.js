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

const Cart = () => {
  const items = useAppContext();
  const cartProducts = items.catProducts;
  console.log(cartProducts);

  const handleClickMinus = (e) => {
    items.dispatch({ type: "qtdMinus", id: e.id });
  };

  const handleClickPlus = (e) => {
    items.dispatch({ type: "qtdPlus", id: e.id });
  };

  const handleClick = (e) => {
    items.dispatch({ type: "remove", id: e.id });
  };

  const handleClickSave = (cartProducts) => {
    saveCartProduct(cartProducts)
  };

  return (
    <>
      {cartProducts.length > 0 ? (
        <Container className={styles.cartWrapper}>
          <h1>My purchases</h1>
          <Row>
            {cartProducts.map((e) => (
              <Col sm={12} key={e.id}>
                <ListGroup>
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <Card item={e} cart={true} />
                      </Col>
                      <Col>
                        <p>${e.price * e.qtd}</p>
                      </Col>
                      <Col>
                        <div className={styles.teste}>
                          <button onClick={() => handleClickMinus(e)}>-</button>
                          <p>{e.qtd}</p>
                          <button onClick={() => handleClickPlus(e)}>+</button>
                        </div>
                      </Col>
                      <Col>
                        <button onClick={() => handleClick(e)}>
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
            <div className={styles.teste1}>
              <h4>Subtotal</h4>
              <p>${0}</p>
            </div>
          </Container>
          <Container className={styles.cartPurchase}>
            <div>
              <Link to="/">
                <button>Continue shopping</button>
              </Link>
            </div>
            <div>
              <button onClick={() => handleClickSave(cartProducts)}>Check out</button>
            </div>
          </Container>
        </Container>
      ) : (
        <Container className={styles.emptyCart}>
          <p>Cart is empty</p>
          <Link to="/">
            <button>Go to shopping</button>
          </Link>
        </Container>
      )}
    </>
  );
};

export default Cart;
