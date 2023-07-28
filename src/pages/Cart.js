import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Card from "../components/CardProduct";
import styles from "./cart.module.css";
import { useAppContext } from "../store/AppContext";

const Cart = () => {
  const items = useAppContext();
  const cartProducts = items.catProducts;

  const handleClickMinus = (e)=> {
    items.catDispatch({type:"qtdMinus", id:e.id })
  }

  const handleClickPlus = (e)=> {
    items.catDispatch({type:"qtdPlus", id:e.id })
  }

  const handleClick = (e)=> {
    items.catDispatch({type:"remove", id:e.id })
  }
  
  return (
    <Container className={styles.cartWrapper}>
      <h1>My purchases</h1>
      <Row>
        { cartProducts.map((e) => (
          <Col sm={12} key={e.id}>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <Card items={e} cart={true} />
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
    </Container>
  );
};

export default Cart;
