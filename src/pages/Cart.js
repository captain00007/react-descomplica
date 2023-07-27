import { useReducer } from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import Card from "../components/CardProduct";
import Image1 from "../images/product_1.jpg";
import styles from "./cart.module.css";

const initialItems = [
  {
    id: 1,
    image: Image1,
    text: "New LCDScreen and HD Vide..",
    price: 120,
    color: ["#fa4251", "#fa4251", "#fa4251", "#fa4251", "#fffff"],
    qtd: 2,
  },
  {
    id: 2,
    image: Image1,
    text: "New LCDScreen and HD Vide..",
    price: 120,
    color: ["#fa4251", "#fa4251", "#fa4251", "#fa4251", "#fffff"],
    qtd: 2,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

const Cart = () => {
  const [items, dispatch] = useReducer(reducer, initialItems);

  const handleClick = (e) => {
    dispatch({ type: "COMPLETE", id: e.id });
  };
  
  return (
    <Container className={styles.cartWrapper}>
      <h1>My purchases</h1>
      <Row>
        {items.map((e) => (
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
                    <p>{e.qtd}</p>
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
