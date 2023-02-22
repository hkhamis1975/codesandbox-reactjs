import { useState } from "react";
import ListItem from "./ListItem";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    setTodo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let tempList = todoList;
    tempList.push(todo);
    setTodoList(tempList);
    // console.log(todoList);
    setTodo("");
  };
  return (
    <div>
      <h1>Todo.js: Form to submit To-Do list</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={todo}></input>
        <button type="submit">Add</button>
      </form>
      {todoList.map((item, index) => (
        <ListItem key={index} name={item}></ListItem>
      ))}
    </div>
  );
}
