import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavBarBS from "react-bootstrap/Navbar";
import styles from "./css/navBar.module.css";

const NavBar = ({ items = []}) => {

  return (
    <Container className={styles.navBarWrapper}>
      <NavBarBS expand="lg">
        <Container>
          <NavBarBS.Toggle aria-controls="basic-NavBarBS-nav" />
          <NavBarBS.Collapse
            id="basic-NavBarBS-nav"
            className={styles.navCollapse}
          >
            <Nav className={styles.navLinkWrapper}>
              {items.map((e, id) => (
                <Nav.Link key={id} href={e.link}>
                  {e.label}
                </Nav.Link>
              ))}
            </Nav>
          </NavBarBS.Collapse>
        </Container>
      </NavBarBS>
    </Container>
  );
};

export default NavBar;
