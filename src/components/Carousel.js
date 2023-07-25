import { useState } from "react";
import CarouselBS from "react-bootstrap/Carousel";

const Carousel = ({ items = [] }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <CarouselBS activeIndex={index} onSelect={handleSelect}>
      {items.map((e,index) => (
        <CarouselBS.Item key={index}>
          <img  className="d-block w-100" src={e} alt="First slide" />
        </CarouselBS.Item>
      ))}
    </CarouselBS>
  );
};

export default Carousel;
