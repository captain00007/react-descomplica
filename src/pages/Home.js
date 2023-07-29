import Container from "react-bootstrap/Container";
import Carousel from "../components/Carousel";
import Image1 from "../images/banner_1.jpg";
import Image2 from "../images/banner_2.jpg";
import Products from "./Products"


const Home = () => {
  const images = [Image1, Image2, Image1];
  return (
    <Container>
      <Carousel items={images} />
      <Products featured={true}/>
    </Container>
  );
};

export default Home;