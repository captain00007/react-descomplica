import Container from "react-bootstrap/Container";
import ImageAbout from "../images/about_us.jpg";
import Card from "./Card";
import styles from "./css/about.module.css"

const About = () => {
  const items = {
    image: ImageAbout,
    title: "Themini Design is Best Part of my Life",
    text: "Here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  };
  return (
    <Container className={styles.aboutWrapper} >
      <h2 className={styles.aboutTitle}>About us</h2>
      <hr />
      <Card items={items} />
    </Container>
  );
};

export default About;
