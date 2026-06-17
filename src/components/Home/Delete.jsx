const Delete = ({deleteTodo , id}) => {
    return ( <strong className="btn btn-outline-danger btn-sm"onClick={() => deleteTodo(id)}>&times;</strong> );
}
 
export default Delete;