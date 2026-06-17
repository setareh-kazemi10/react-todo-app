import { useEffect, useState } from "react";
import './App.css'
import Input from "./components/Home/Input";
import SubmitBtn from "./components/Home/SubmitBtn";
import DeleteBtn from "./components/Home/DeleteBtn";
import InputSearch from "./components/Home/InputSearch";
import MapList from "./components/Home/MapList";


const App = () => {
  const [inputVal, setInputVal] = useState("");
  const [todo, setTodo] = useState([]);
  const [search, setSearch] = useState("")


  const handleInput = (e) => {
    setInputVal(e.target.value)
  }


  const handleToDo = () => {
    const newId = todo.length === 0 ? 1 : todo[todo.length - 1].id + 1;

    const newTodo = {
      id: newId,
      todo: inputVal,
      done: false,
    }

    if (inputVal.trim() === "") return
    setTodo([...todo, newTodo])
    setInputVal("")

  }

  const deleteTodo = (id) => {
    const filterTodo = todo.filter((item) => item.id != id);
    setTodo(filterTodo)
  }

  const handleDeleteTodo = () => {
    setTodo([])
  }

  const handleEdit = (id) => {
    const editId = todo.find((item) => item.id === id);
    setInputVal(editId.todo);
    setTodo(todo.filter((elem) => elem.id != id))
  }

  const toggleDone = (id) => {
    const updateToDo = todo.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setTodo(updateToDo)
  }



  useEffect(() => {
    const saveToDo = JSON.parse(localStorage.getItem("todos"))
    if (saveToDo) setTodo(saveToDo)
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo))
  }, [todo])

  const filteredToDos = todo.filter((item) =>
    item.todo.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 mx-auto mt-4">
          <div className="d-flex mb-2">
            <Input inputVal={inputVal} handleInput={handleInput} />
            <SubmitBtn handleToDo={handleToDo} />
            <DeleteBtn handleDeleteTodo={handleDeleteTodo} todo={todo}/>
            <InputSearch search={search} setSearch={setSearch} />

          </div>
          {(search ? filteredToDos : todo).map((item) => (

            <ul key={item.id}>
              <MapList item={item} toggleDone={toggleDone} handleEdit={handleEdit} deleteTodo={deleteTodo} />
            </ul>
          )
          )

         }
        </div>
      </div>
    </div>
  );
}

export default App;