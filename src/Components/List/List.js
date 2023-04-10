import ListItem from "./ListItem";

import styles from "./List.module.css";

const List = (props) => {
  // props.users is [{}]
  // let {name, age} = props.users[0];

  return (
    <ul className={styles.resp_list}>
      {props.users.map((user, index) => (
        <ListItem name={user.name} age={user.age} key={index} />
      ))}
    </ul>
  );
};

export default List;
