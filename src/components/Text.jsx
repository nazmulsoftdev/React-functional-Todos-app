import React from "react";
import editIcon from "../assets/images/editIcon.png";
import deleteIcon from "../assets/images/deleteIcon.png";

function Text({ todos, Delete, Update }) {
  return todos.length === 0
    ? ""
    : todos.map((item, index) => {
        return (
          <div key={index} className="todoTextWrap">
            <p>{item}</p>
            <div className="todosIconWrap">
              <img
                onClick={() => Update(item, index)}
                src={editIcon}
                alt="edit.png"
                width="25px"
              />
              <img
                onClick={() => Delete(item)}
                src={deleteIcon}
                alt="delete"
                width="25px"
              />
            </div>
          </div>
        );
      });
}

export default Text;
