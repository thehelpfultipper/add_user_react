import Button from "./UI/Button";
import Card from "./UI/Card";

import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={`${styles.modal_overlay} ${props.className && props.className}`}>
      <Card className={styles.modal_wrapper}>
        <div className={styles.modal_header}>
          <h3>Invalid input</h3>
        </div>
        <div className={styles.modal_body}>
          <p>Error message goes in here.</p>
        </div>
        <div className={styles.modal_action}>
          <Button type="button" className={styles.modal_btn}>Close</Button>
        </div>
      </Card>
    </div>
  );
};

export default Modal;
