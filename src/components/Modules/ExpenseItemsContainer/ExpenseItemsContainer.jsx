import React, { useState } from "react";

import ExpenseItem from "./../ExpenseItem/ExpenseItem";

const ExpenseItemsContainer = (props) => {
  console.log("YEAR SELECTED -> ", props.selectedYear);

  let filteredArray = props.expensesArray;

  if (props.selectedYear && !isNaN(props.selectedYear)) {
    filteredArray = filteredArray.filter((expense) => Number(props.selectedYear) === expense.date.getFullYear());
  } else {
    filteredArray = props.expensesArray;
  }

  return (
    <div>
      {filteredArray &&
        filteredArray.length &&
        filteredArray.map((expense) => <ExpenseItem key={expense.id} expense={expense} />)}
    </div>
  );
};

export default ExpenseItemsContainer;
