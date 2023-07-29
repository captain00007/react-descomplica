import ButtonBS from "react-bootstrap/Button";
import styles from "./css/button.module.css";
import { useState } from "react";

const Button = ({ handleClick,item }) => {
  const [disabled, setDisable] = useState(false);
  
  return (
    <ButtonBS
      className={disabled ? styles.cardDisableButton : styles.cardButton}
      disabled={disabled}
      onClick={() => handleClick(item, setDisable)}
    >
      { disabled ? "Product added" : "Add to cart" }
    </ButtonBS>
  );
};

export default Button;
