import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import styles from "./css/notification.module.css"

const Notification = ({ showNotif, setShowNotif, variant, message }) => {
  if (showNotif) {
    return (
      <Container className={styles.notificationWrapper}>
        <Alert variant={variant} onClose={() => setShowNotif(false)} dismissible>
          <p>{message}</p>
        </Alert>
      </Container>
    );
  }
};

export default Notification;
