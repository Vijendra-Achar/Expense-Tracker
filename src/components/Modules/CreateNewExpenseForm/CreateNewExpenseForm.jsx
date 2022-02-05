import React, { useState } from "react";

import "./CreateNewExpenseForm.scss";

const CreateNewExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [dateofExpense, setDateofExpense] = useState("");
  const [amount, setAmount] = useState("");

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

  return (
    <div className="new-expense-form">
      <div className="new-expense-form__heading"> Create a new expense 💸</div>

      <form className="form-control">
        <div className="new-expense-form__container">
          {/* Left coloumn */}
          <div className="new-expense-form__left-coloumn">
            {/* Title Input */}
            <div className="form-control__text-input">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" onChange={titleChangeHandler} />
            </div>

            {/* Descreption  Input */}
            <div className="form-control__text-input">
              <label htmlFor="desc">Description</label>
              <input type="text" id="desc" onChange={descChangeHandler} />
            </div>
          </div>

          {/* Right coloumn */}
          <div className="new-expense-form__right-coloumn">
            {/* Date  Input */}
            <div className="form-control__text-input">
              <label htmlFor="dateInput">Date of expenditure</label>
              <input type="date" id="dateInput" onChange={dateChangeHandler} />
            </div>

            {/* Amount  Input */}
            <div className="form-control__text-input">
              <label htmlFor="dateOfExpense">Date of expense</label>
              <input type="text" id="dateOfExpense" onChange={amountChangeHandler} />
            </div>
          </div>
        </div>

        <div className="form-control__button-input">
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewExpenseForm;
