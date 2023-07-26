import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Star = ({color}) => {
  return (
      <FontAwesomeIcon style={{color: color}} icon={faStar} />
  );
};

export default Star;
