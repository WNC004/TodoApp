import { Checkbox, ListItem, Typography } from "@material-ui/core";

import React from "react";

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  return (
    <ListItem style={{ display: "flex"}}>
      <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
      <Typography
        variant="h5"
        style={{
          textDecoration: todo.completed ? "line-through" : null
        }}
      >
        {todo.task}
      </Typography>
      <Typography
        variant="h5"
      >
        |
      </Typography>
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null
        }}
      >
        {todo.date}
      </Typography>
    </ListItem>
  );
}

export default Todo;