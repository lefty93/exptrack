import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";

function ExpenseList() {
  const { expenses } = useContext(AppContext)
  return (
    <ul className='border border-gray-200 rounded overflow-hidden shadow-md '>
      {expenses.map(expenseArray => (
        <ExpenseItem
          id={expenseArray.id}
          name={expenseArray.name}
          cost={expenseArray.cost}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
