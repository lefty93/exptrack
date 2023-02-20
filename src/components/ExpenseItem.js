import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";

function ExpenseItem(props) {
  return (
    <li className='px-2 py-3 border-b border-gray-200 flex justify-between'>
      {props.name}: RM{props.cost}
      <RiDeleteBin2Fill size='1.5em'></RiDeleteBin2Fill>
    </li>
  );
}

export default ExpenseItem;
