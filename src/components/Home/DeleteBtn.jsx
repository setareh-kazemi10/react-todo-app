const DeleteBtn = ({handleDeleteTodo , todo}) => {
    return ( <button className="btn btn-danger btn-sm" onClick={handleDeleteTodo} disabled={todo.length === 0}>Delete All</button>);
}
 
export default DeleteBtn;