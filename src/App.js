import React, { useEffect, useState } from "react";
import "./App.scss";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TextField, ListItem, Icon } from "@material-ui/core";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredTodos, setfilteredTodos] = useState([]);

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    setfilteredTodos(
      todos.filter(todo =>
        todo.task.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, todos]);

  function addTodo(todo) {
    // adds new todo to beginning of todos array
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  return (
    <div className="App">
      <ListItem style={{ display: "flex"}}>
      <TextField
        label="Search Tasks"
        type="text"
        onChange={e => setSearch(e.target.value)}
      />
      <Icon>||</Icon>
      
      <TodoForm addTodo={addTodo}/>
     </ListItem>
      <TodoList
        todos={filteredTodos}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;