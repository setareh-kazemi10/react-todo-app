const Edit = ({handleEdit , id}) => {
    return (  <span className=" mx-1 btn btn-outline-primary btn-sm" onClick={() => handleEdit(id)} >&#9998;</span>);
}
 
export default Edit;