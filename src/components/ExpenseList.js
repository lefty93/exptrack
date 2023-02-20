import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList() {
  const expenses = [
    {
      id: 11,
      name: "lunch",
      cost: 22,
    },
    {
      id: 12,
      name: "dinner",
      cost: 20,
    },
    {
      id: 13,
      name: "movie",
      cost: 5,
    },
  ];
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
