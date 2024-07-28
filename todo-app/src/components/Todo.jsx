import React from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";

function Todo() {
  return (
    <div>
      <div>Ben ilk todo</div>
      <div>
        <IoIosRemoveCircle />
        <FaRegEdit />
      </div>
    </div>
  );
}

export default Todo;
