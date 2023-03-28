import Button from "./UI/Button";
import Modal from "./Modal";

import styles from './Form.module.css';

const Form = (props) => {
  return (
    <div className={styles.form_wrapper}>
      <Modal className={styles.modal__hide} />
      <form className={`${styles.form}`}>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" />

        <label for="age">Age</label>
        <input type="number" id="age" name="age" max="100" min="1" />

        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
};

export default Form;
