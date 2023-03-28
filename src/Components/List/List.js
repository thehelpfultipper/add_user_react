import ListItem from './ListItem';

import styles from './List.module.css';

const List = props => {
    // props.users is [{}]
    let {name, age} = props.users[0];
    
    return (
        <ul className={styles.resp_list}>
            <ListItem name={name} age={age} />
        </ul>
    )
}

export default List;