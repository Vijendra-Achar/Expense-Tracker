import React, { useState } from "react";

import "./CreateNewExpenseForm.scss";

const CreateNewExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [dateofExpense, setDateofExpense] = useState("");
  const [amount, setAmount] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const descChangeHandler = (event) => {
    setDesc(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDateofExpense(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const handleFormHide = () => {
    props.handleCreateNewExpenseFormCancel();
  };

  const createNewExpenseSubmitHandler = (event) => {
    event.preventDefault();

    if (!title && !amount && !dateofExpense) {
      setErrorMessage("Please fill up the form!");
      return;
    }

    setErrorMessage("");

    const expenseData = {
      title,
      desc,
      amount: Number(amount),
      date: new Date(dateofExpense),
    };

    props.onNewExpenseSaved(expenseData);

    // Hide the form
    handleFormHide();

    // Reset Form Data
    setAmount("");
    setDateofExpense("");
    setTitle("");
    setDesc("");
  };

  return (
    <div className="new-expense-form">
      <div className="new-expense-form__heading"> Create a new expense 💸</div>

      <form onSubmit={createNewExpenseSubmitHandler} className="form-control">
        {/* The Error Message */}

        {errorMessage && (
          <div className="form-control__error-message-container">
            <div className="form-control__error-message">{errorMessage}</div>
          </div>
        )}

        <div className="new-expense-form__container">
          {/* Left coloumn */}
          <div className="new-expense-form__left-coloumn">
            {/* Title Input */}
            <div className="form-control__text-input">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" onChange={titleChangeHandler} value={title} />
            </div>

            {/* Descreption  Input */}
            <div className="form-control__text-input">
              <label htmlFor="desc">Description</label>
              <input type="text" id="desc" onChange={descChangeHandler} value={desc} />
            </div>
          </div>

          {/* Right coloumn */}
          <div className="new-expense-form__right-coloumn">
            {/* Date  Input */}
            <div className="form-control__text-input">
              <label htmlFor="dateInput">Date of expenditure</label>
              <input type="date" id="dateInput" onChange={dateChangeHandler} value={dateofExpense} />
            </div>

            {/* Amount  Input */}
            <div className="form-control__text-input">
              <label htmlFor="dateOfExpense">Amount spent</label>
              <input type="number" step="0.01" id="dateOfExpense" onChange={amountChangeHandler} value={amount} />
            </div>
          </div>
        </div>

        <div className="form-control__button-input">
          <button type="submit">Create</button>
        </div>

        <div className="form-control__button-input">
          <button onClick={handleFormHide} type="button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewExpenseForm;
