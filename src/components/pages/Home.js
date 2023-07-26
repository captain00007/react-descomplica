import Container from "react-bootstrap/Container";
import Carousel from "../Carousel";
import Image1 from "../../images/banner_1.jpg";
import Image2 from "../../images/banner_2.jpg";
import Products from "../Products"
import About from "../About";
import Team from "../Team";

const Home = () => {
  const images = [Image1, Image2, Image1];
  return (
    <Container>
      <Carousel items={images} />
      <Products/>
      <About />
      <Team/>
    </Container>
  );
};

export default Home;