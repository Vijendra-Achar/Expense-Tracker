import React from "react";

import "./ExpenseItem.scss";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div className="expense-item__date">January 27, 2022</div>
      <div className="expense-item__details">
        <div className="title">At the Bar</div>
        <div className="description">
          <p>We hangout with a few friends for drinks</p>
        </div>
      </div>

      <div className="expense-item__amount expense">$ 297.50</div>
    </div>
  );
}

export default ExpenseItem;
