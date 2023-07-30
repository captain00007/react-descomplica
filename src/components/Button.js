import ButtonBS from "react-bootstrap/Button";
import styles from "./css/button.module.css";
import { useState } from "react";
import { useAppContext } from "../store/AppContext";

const Button = ({ handleClick,item }) => {
  const value = useAppContext();
  const btnDisabled = value.button.includes(item.id)
  const [disabled, setDisable] = useState(btnDisabled);
  
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
