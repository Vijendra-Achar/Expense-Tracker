import React from "react";

import CreateNewExpenseForm from "./../CreateNewExpenseForm/CreateNewExpenseForm";

import { createNewExpenseId } from "../../../utilities/utilities";

import "./CreateNewExpense.scss";

const CreateNewExpense = (props) => {
  const newExpenseSavedHandler = (newExpense) => {
    const expenseObject = {
      ...newExpense,
      id: createNewExpenseId(),
    };

    props.onNewExpenseAdded(expenseObject);
  };

  return (
    <div className="new-expense">
      <CreateNewExpenseForm onNewExpenseSaved={newExpenseSavedHandler} />
    </div>
  );
};

export default CreateNewExpense;
