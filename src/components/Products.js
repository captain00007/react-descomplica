import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Card from "./CardProduct";
import { useState } from "react";
import styles from "./css/products.module.css";
import { useAppContext } from "../store/AppContext";

const Products = () => {
  const [showNotif, setShowNotif] = useState(false);
  const items = useAppContext();
  const products = items.allProducts;
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
            {products.map((e) => (
              <Col sm={6} lg={3} className={styles.col} key={e.id}>
                <Card item={e} setShowNotif={setShowNotif} width="25rem" />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Products;
