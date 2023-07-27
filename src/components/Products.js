import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Card from "./CardProduct";
import { useState } from "react";
import styles from "./css/products.module.css";
import Image1 from "../images/product_1.jpg";
import Image2 from "../images/product_2.jpg";
import Image3 from "../images/product_3.jpg";
import Image4 from "../images/product_4.jpg";

const Products = () => {
  const [showNotif, setShowNotif] = useState(false);
  const items = [
    {
      image: Image1,
      text: "New LCDScreen and HD Vide..",
      price: 120,
      color: ["#fa4251", "#fa4251", "#fa4251", "#fa4251", "#fffff"],
    },
    {
      image: Image2,
      text: "New LCDScreen and HD Vide..",
      price: 220,
      color: ["#fa4251", "#fa4251", "#fa4251", "#fa4251", "#fffff"],
    },
    {
      image: Image3,
      text: "New LCDScreen and HD Vide..",
      price: 450,
      color: ["#fa4251", "#fa4251", "#fa4251", "#fa4251", "#fffff"],
    },
    {
      image: Image4,
      text: "New LCDScreen and HD Vide..",
      price: 320,
      color: ["#fa4251", "#fa4251", "#fa4251", "#fa4251", "#fffff"],
    },
  ];
  return (
    <>
      {showNotif && (
        <Container className={styles.notificationWrapper}>
          <Alert
            variant="succes"
            onClose={() => setShowNotif(false)}
            dismissible
          >
            <p>Product added to cart</p>
          </Alert>
        </Container>
      )}

      <Container className={styles.productsWrapper}>
        <h2 className={styles.productsTitle}>Products</h2>
        <hr />
        <Container>
          <Row>
            {items.map((e, index) => (
              <Col sm={6} lg={3} className={styles.col} key={index}>
                <Card items={e} setShowNotif={setShowNotif} />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Products;
