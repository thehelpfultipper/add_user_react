import Form from "./Components/Form";
import List from "./Components/List/List";
import Card from "./Components/UI/Card";
import { useState } from "react";

import styles from "./App.module.css";

const USERS = [
  {
    name: "THT",
    age: 1.5,
  },
];

function App() {
  let [users, setUsers] = useState(USERS); // [ [{}], func ]

  const newUserDataHandler = (data) => {
    // data => {name, age} from form
    setUsers((currUsers) => [...currUsers, data]);
  };
 

  return (
    <div className={styles.app_wrapper}>
      {/* Form component */}
      <Card>
        <Form newUser={newUserDataHandler} />
      </Card>

      {/* List component */}
      <Card>
        <List users={users} />
      </Card>
    </div>
  );
}

export default App;
