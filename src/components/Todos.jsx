import React, { useState } from "react";
import Button from "./Button";
import Scroll from "./Scroll";
import Text from "./Text";

function Todos() {
  const [todos, setTodos] = useState([]);

  // Add todos Item

  const Add = () => {
    let userInput = prompt("Create Todos");
    if (userInput === "" || userInput == null) {
      return false;
    } else {
      setTodos((PrevSate) => [...PrevSate, userInput]);
    }
  };

  // delete todos Item

  const Delete = (itemTodoDeleted, index) => {
    const filteredItem = todos.filter((item) => {
      return item !== itemTodoDeleted;
    });

    setTodos(filteredItem);
  };

  const Update = (item, index) => {
    console.log(item);
    let userInput = prompt(`Update`);
    if (userInput === "" || userInput == null) {
      return false;
    } else {
      let PrevTodos = [...todos];

      PrevTodos = userInput;

      const UpdateTodos = [...todos];
      UpdateTodos[index] = PrevTodos;
      setTodos(UpdateTodos);
    }
  };

  return (
    <div>
      <Button className="TodoButton" Add={Add}>
        Create Todos
      </Button>
      <Scroll className="ScrollSection">
        <Text todos={todos} Delete={Delete} Update={Update} />
      </Scroll>
    </div>
  );
}

export default Todos;
