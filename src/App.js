import Form from "./Components/Form";
import List from "./Components/List/List";
import Card from "./Components/UI/Card";

import styles from "./App.module.css";

const USERS = [
  {
    name: "THT",
    age: 1.5,
  },
];

function App() {
  return (
    <div className={styles.app_wrapper}>
      {/* Form component */}
      <Card>
        <Form />
      </Card>

      {/* List component */}
      <Card>
        <List users={USERS} />
      </Card>
    </div>
  );
}

export default App;
