import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Balance() {
  const { expenses, income } = useContext(AppContext);
  const expensesTotal = expenses.reduce((total, item) => {
    return (total = total + item.cost)
  }, 0)
  return (
    <div class='bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 p-6 rounded-lg border-2 border-purple-500'>

      <div class='text-lg text-purple-300'>Balance</div>
      <div class='text-4xl text-purple-100'>RM{income - expensesTotal}</div>

    </div>
  );
}

export default Balance;
