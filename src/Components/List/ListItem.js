import styles from './ListItem.module.css';

const ListItem = props => {
    return <li className={styles.list_item}>{props.name} ({props.age} years old)</li>
}

export default ListItem;