import Container from "react-bootstrap/Container";
import Carousel from "../Carousel";
import Image1 from "../../images/banner_1.jpg";
import Image2 from "../../images/banner_2.jpg";
import About from "../About";

const Home = () => {
  const images = [Image1, Image2, Image1];
  return (
    <Container>
      <Carousel items={images} />
      <About />
    </Container>
  );
};

export default Home;
