import Button from "./UI/Button";
import Modal from "./Modal";
import { useState } from "react";

import styles from "./Form.module.css";

const Form = (props) => {
  let [name, setName] = useState('')
  let [age, setAge] = useState('');

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(+e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    
    let data = { name, age };

    props.newUser(data);

    setName('');
    setAge('')
  };

  return (
    <div className={styles.form_wrapper}>
      <Modal className={styles.modal__hide} />
      <form className={`${styles.form}`} onSubmit={formSubmitHandler}>
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={nameHandler}
        />

        <label for="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          max="100"
          min="1"
          value={age}
          onChange={ageHandler}
        />

        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
};

export default Form;
