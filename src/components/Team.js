import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "./Card";
import Image1 from "../images/our_team_1.jpg";
import Image2 from "../images/our_team_2.jpg";
import Image3 from "../images/our_team_3.jpg";
import styles from "./css/team.module.css";
import Icon from "./Icon";

const Team = () => {
  const items = [
    {
      image: Image1,
      title: "Captain Georges",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae, magnam esse, nemo consectetur.",
    },
    {
      image: Image2,
      title: "Tonia Maguire",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae, magnam esse, nemo consectetur.",
    },
    {
      image: Image3,
      title: "James Christian",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae, magnam esse, nemo consectetur.",
    },
  ];
  return (
    <Container className={styles.teamWrapper}>
      <h2 className={styles.teamTitle}>Our creative team</h2>
      <hr />
      <Container>
        <Row>
          {items.map((e, index) => (
            <Col key={index} className={styles.col}>
              <Card  items={e} width="18rem" icon={true}></Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Team;
