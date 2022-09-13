import { useState } from "react";
import data from "./data.json";
import "./App.css";
import Header from "./Header";
import ToDoList from "./ToDoList";

function App() {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    /*let mapped = toDoList.map((task) => {
      return task.id === id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
    */
    console.log("working");
  };
  return (
    <div className="App">
      Hello World! A To Do List Will Go here!
      <Header></Header>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} />
    </div>
  );
}

export default App;
