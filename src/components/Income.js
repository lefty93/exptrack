import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import EditIncome from "./EditIncome";
import ViewIncome from "./ViewIncome";

function Income() {
  const { income, dispatch } = useContext(AppContext)
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: 'SET_INCOME',
      payload: value,
    })

    setIsEditing(false)
  }

  return (
    <div class='bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 p-6 rounded-lg border-2 border-purple-500'>

      <div class='text-lg text-purple-300'>Income</div>
      <div class='text-4xl text-purple-100'>RM{income}</div>
      {isEditing ? (
        <EditIncome handleSaveClick={handleSaveClick} income={income} />
      ) : (
        // For part 1 render component inline rather than create a seperate one
        <ViewIncome handleEditClick={handleEditClick} income={income} />
      )}



    </div>
  );
}

export default Income;
