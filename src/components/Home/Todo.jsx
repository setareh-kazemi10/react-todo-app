const Todo = ({item}) => {
    return ( <span className={item.done ? "ms-1 text-decoration-line-through text-muted" : "ms-1"}>{item.todo}</span> );
}
 
export default Todo;