import React from "react";

import ExpenseDate from "../ExpenseDate/ExpenseDate";

import "./ExpenseItem.scss";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <div className="expense-item__date">
        <ExpenseDate date={props.expense.date} />
      </div>

      <div className="expense-item__data">
        <div className="expense-item__details">
          <div className="title">{props.expense.title}</div>
          <div className="description">
            <p>{props.expense.desc}</p>
          </div>
        </div>

        <div className="expense-item__amount expense">$ {props.expense.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
