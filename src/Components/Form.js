import Button from "./UI/Button";
import Modal from "./Modal";

const Form = (props) => {
  return (
    <div>
      <Modal />
      <form>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" />

        <label for="age">Age</label>
        <input type="number" id="age" name="age" />

        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
};

export default Form;
