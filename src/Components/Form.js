import Button from "./UI/Button";
import Modal from "./Modal";
import { useState, Fragment, useRef } from "react";

import styles from "./Form.module.css";

const Form = (props) => {
  // let [name, setName] = useState("");
  // let [age, setAge] = useState("");
  let nameRef = useRef(),
      ageRef = useRef();
  let [err, setErr] = useState(false);
  let [errMsg, setErrMsg] = useState();

  // const nameHandler = (e) => {
  //   setName(e.target.value);
  // };

  // const ageHandler = (e) => {
  //   setAge(e.target.value);
  // };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    let name = nameRef.current.value,
        age = ageRef.current.value;

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

    // Reset input values
    // setName("");
    // setAge("");
    nameRef.current.value = '';
    ageRef.current.value = '';
  };

  const errHandler = () => {
    setErr(false);
  };

  return (
    <Fragment>
      {err && <Modal error={errMsg} onError={errHandler} />}
      <form className={`${styles.form} ${errMsg && styles.form__err}`} onSubmit={formSubmitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          // value={name}
          // onChange={nameHandler}
          ref={nameRef}
        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          max="100"
          min="1"
          // value={age}
          // onChange={ageHandler}
          ref={ageRef}
        />

        <Button type="submit">Add User</Button>
      </form>
    </Fragment>
  );
};

export default Form;
