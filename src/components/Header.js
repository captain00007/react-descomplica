import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import NavBar from "./NavBar";
import styles from "./css/header.module.css";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <Container className={styles.headerWrapper}>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <Form.Control
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
            />
            <FontAwesomeIcon icon={faSearch} />
          </InputGroup>
        </Col>
        <Col className={styles.col2}>
          <div class="text-center">
            <a href="#">
              <img src={logo} alt="Company logo" />
            </a>
          </div>
        </Col>
        <Col className={styles.col3}>1 of 1</Col>
      </Row>
      <NavBar />
    </Container>
  );
};

export default Header;
