import React, { useState } from "react";

import { sampleData } from "./utilities/data";

import { getYears } from "./utilities/utilities";

import ExpenseItem from "./components/Modules/ExpenseItem/ExpenseItem";
import CreateNewExpense from "./components/Modules/CreateNewExpense/CreateNewExpense";

import ExpensesDataDisplay from "./components/Modules/ExpensesDataDisplay/ExpensesDataDisplay";

const App = () => {
  const [expenseItems, setExpenseItems] = useState(sampleData);
  const [yearsList, setYearsList] = useState(getYears(expenseItems));

  const selectedYearChangeHandler = (selectedYear) => {
    console.log("The Year hosted up -> ", selectedYear);
  };

  const handleNewExpense = (newExpense) => {
    setExpenseItems((currentExpenseList) => {
      const newArr = [newExpense, ...currentExpenseList];

      setYearsList(() => getYears(newArr));

      return newArr;
    });
  };

  return (
    <div>
      <div>
        <CreateNewExpense onNewExpenseAdded={handleNewExpense} />
      </div>

      <div>
        <ExpensesDataDisplay
          key={yearsList.length}
          yearsList={yearsList}
          onSelectedYearChange={selectedYearChangeHandler}
        />
      </div>

      {expenseItems.map((expense) => {
        return <ExpenseItem key={expense.id} expense={expense} />;
      })}
    </div>
  );
};

export default App;
