import Form from "./Components/Form";
import List from "./Components/List/List";
import Card from "./Components/UI/Card";
import { useState } from "react";

import styles from "./App.module.css";

const USERS = [];

function App() {
  let [users, setUsers] = useState(USERS); // [ [{}], func ]

  const newUserDataHandler = (data) => {
    // data => {name, age} from form
    setUsers((currUsers) => [...currUsers, data]);
  };

  let noUser = <p className={styles.list_empty}>The list is empty, please add a user.</p>

  if(users.length > 0) {
    noUser = <List users={users} />;
  } 

  return (
    <div className={styles.app_wrapper}>
      {/* Form component */}
      <Card className={styles.form_wrapper}>
        <Form newUser={newUserDataHandler} />
      </Card>

      {/* List component */}
      <Card>
        {noUser}
      </Card>
    </div>
  );
}

export default App;
