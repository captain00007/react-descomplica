import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import SearchInput from "./SearchInput";
import NavBar from "./NavBar";
import styles from "./css/header.module.css";
import logo from "../images/logo.png";

const Header = () => {
  const links = [
    { label: "Home", link: "#" },
    { label: "Products", link: "#" },
    { label: "About us", link: "#" },
    { label: "Our team", link: "#" },
    { label: "Contact us", link: "#" },
  ];

  return (
    <Container className={styles.headerWrapper}>
      <Row>
        <Col sm={12} md={12} lg={3} className={styles.col1}>
          <SearchInput
            label="Search"
            placeHolder="Search"
            style={{ backgroundColor: "#fa4251" }}
          />
        </Col>
        <Col sm={12} md={6} lg={6} className={styles.col2}>
          <div>
            <a href="#">
              <img src={logo} alt="Company logo" />
            </a>
          </div>
        </Col>
        <Col sm={12} md={6} lg={3} className={styles.col3}>
          <button className={styles.buttonWrapper}>
            <FontAwesomeIcon style={{ color: "white" }} icon={faCartShopping} />
            <div>
              <h5 className={styles.cartText}>Shopping Cart</h5>
              <p style={{ color: "white" }}>Items ({0}) </p>
            </div>
          </button>
        </Col>
      </Row>
      <NavBar items={links} />
    </Container>
  );
};

export default Header;
