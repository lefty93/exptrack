import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Income() {
  const { income } = useContext(AppContext)
  return (
    <div class='bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 p-6 rounded-lg border-2 border-purple-500'>
      <div class='my-auto'>
        <div class='text-lg text-purple-300'>Income</div>
        <div class='text-4xl text-purple-100'>RM{income}</div>
      </div>
    </div>
  );
}

export default Income;
