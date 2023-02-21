import React, { useContext } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { AppContext } from "../context/AppContext";

function ExpenseItem(props) {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id
    })
  }

  return (
    <li className='px-2 py-3 border-b border-gray-200 flex justify-between'>
      {props.name}: RM{props.cost}
      <RiDeleteBin2Fill size='1.5em' onClick={handleDeleteExpense}></RiDeleteBin2Fill>
    </li>
  );
}

export default ExpenseItem;
