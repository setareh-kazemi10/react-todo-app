import Delete from "./Delete";
import Edit from "./Edit";
import Todo from "./Todo";
import ToggleDone from "./ToggleDone";

const MapList = ({item , toggleDone , handleEdit , deleteTodo}) => {
    return ( 
         <li className="list-group-item d-flex justify-content-between" >
                <div>
                  <ToggleDone toggleDone={toggleDone} item={item} />

                  <Todo item={item}/>
                </div>
                <div>
                  <Edit id={item.id} handleEdit={handleEdit}/>
                  <Delete id={item.id} deleteTodo={deleteTodo} />
                </div>
              </li>
     );
}
 
export default MapList;