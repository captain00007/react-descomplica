import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavBarBS from "react-bootstrap/Navbar";
import styles from "./css/navBar.module.css";

const NavBar = () => {
  return (
    <Container className={styles.navBarWrapper}>
      <NavBarBS expand="lg">
        <Container>
          <NavBarBS.Toggle aria-controls="basic-NavBarBS-nav" />
          <NavBarBS.Collapse id="basic-NavBarBS-nav" className={styles.navCollapse} >
            <Nav className={styles.navLinkWrapper}>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Products</Nav.Link>
              <Nav.Link href="#link">About us</Nav.Link>
              <Nav.Link href="#link">Our team</Nav.Link>
              <Nav.Link href="#link">Contact us</Nav.Link>
            </Nav>
          </NavBarBS.Collapse>
        </Container>
      </NavBarBS>
    </Container>
  );
};

export default NavBar;
