import React from "react";

import CreateNewExpenseForm from "./../CreateNewExpenseForm/CreateNewExpenseForm";

import "./CreateNewExpense.scss";

const CreateNewExpense = () => {
  return (
    <div className="new-expense">
      <CreateNewExpenseForm />
    </div>
  );
};
export default CreateNewExpense;
