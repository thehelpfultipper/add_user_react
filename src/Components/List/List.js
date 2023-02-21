import ListItem from './ListItem';

const List = props => {
    // props.users is [{}]
    let {name, age} = props.users[0];
    
console.log(name, age)
    return (
        <ul>
            <ListItem name={name} age={age} />
        </ul>
    )
}

export default List;