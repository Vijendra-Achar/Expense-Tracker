import React from "react";

import CreateNewExpenseForm from "./../CreateNewExpenseForm/CreateNewExpenseForm";

import { createNewExpenseId } from "../../../utilities/utilities";

import "./CreateNewExpense.scss";

const CreateNewExpense = () => {
  const newExpenseSavedHandler = (newExpense) => {
    const expenseObject = {
      ...newExpense,
      id: createNewExpenseId(),
    };

    console.log("State is now listed up -> ", expenseObject);
  };

  return (
    <div className="new-expense">
      <CreateNewExpenseForm onNewExpenseSaved={newExpenseSavedHandler} />
    </div>
  );
};
export default CreateNewExpense;
