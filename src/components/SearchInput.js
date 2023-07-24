import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "./css/buttonInput.module.css"

const SearchInput = ({ label, placeHolder, style }) => {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        aria-label="Example text with button addon"
        aria-describedby="basic-addon1"
        placeholder={placeHolder}
        className={styles.buttonInput}
      />
      <Button className={styles.buttonInput} style={style} id="button-addon1">
        {label}
      </Button>
    </InputGroup>
  );
};

export default SearchInput;
