import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchInput from "./SearchInput";
import styles from "./css/footer.module.css";

const Footer = ({ items = [] }) => {
  return (
    <Container fluid className={styles.footerWrapper}>
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <h3 className={styles.followTitle}>Follow Our Updates !</h3>
            <p className={styles.followText}>
              Be the First to know about our Fresh Arrivals and much more!
            </p>
          </Col>
          <Col sm={12} md={6}>
            <div className={styles.inputWrapper}>
              <SearchInput
                label="Subscribe"
                placeHolder="Enter your email"
                style={{ backgroundColor: "black" }}
                height="60px"
              />
            </div>
          </Col>
        </Row>

        <Row className={styles.information}>
          {items.map((e, index) => (
            <Col className={styles.col} sm={6} lg={3} key={index}>
              <h3 className={styles.title}>{e.title}</h3>
              <ul>
                {e.data.map((el, elIndex) => (
                  <li key={elIndex}>{el}</li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
