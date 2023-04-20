import Button from "./UI/Button";
import Modal from "./Modal";
import { useState } from "react";

import styles from "./Form.module.css";

const Form = (props) => {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [err, setErr] = useState(false);
  let [errMsg, setErrMsg] = useState();

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    // Check if input has error
    if (name.length === 0 || age.length === 0) {
      setErr(true);
      setErrMsg("Please enter a valid name and age (between 1-100).");
      return;
    } else {
      setErrMsg();
    }

    let data = { name, age };

    props.newUser(data);

    setName("");
    setAge("");
  };

  const errHandler = () => {
    setErr(false);
  };

  return (
    <div className={styles.form_wrapper}>
      {err && <Modal error={errMsg} onError={errHandler} />}
      <form className={`${styles.form} ${errMsg && styles.form__err}`} onSubmit={formSubmitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={nameHandler}
        />

        <label htmlFor="age">Age</label>
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
