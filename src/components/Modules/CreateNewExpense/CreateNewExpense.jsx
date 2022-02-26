import React, { useState } from "react";

import CreateNewExpenseForm from "./../CreateNewExpenseForm/CreateNewExpenseForm";

import { createNewExpenseId } from "../../../utilities/utilities";

import "./CreateNewExpense.scss";

const CreateNewExpense = (props) => {
  const [showCreateNewExpenseForm, setShowCreateNewExpenseForm] = useState(false);

  const newExpenseSavedHandler = (newExpense) => {
    const expenseObject = {
      ...newExpense,
      id: createNewExpenseId(),
    };
    props.onNewExpenseAdded(expenseObject);
  };

  const toggleExpenseForm = () => {
    setShowCreateNewExpenseForm((currentState) => !currentState);
  };

  const handleCreateNewExpenseFormCancelFunc = () => {
    toggleExpenseForm();
  };

  return (
    <div className="new-expense">
      {!showCreateNewExpenseForm && (
        <button onClick={toggleExpenseForm} className="new-expense__create-button">
          Create new Expense
        </button>
      )}
      {showCreateNewExpenseForm && (
        <CreateNewExpenseForm
          handleCreateNewExpenseFormCancel={handleCreateNewExpenseFormCancelFunc}
          onNewExpenseSaved={newExpenseSavedHandler}
        />
      )}
    </div>
  );
};

export default CreateNewExpense;
