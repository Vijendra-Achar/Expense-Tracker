import React, { useState } from "react";

import { sampleData } from "./utilities/data";

import { getYears } from "./utilities/utilities";

import CreateNewExpense from "./components/Modules/CreateNewExpense/CreateNewExpense";

import ExpensesDataDisplay from "./components/Modules/ExpensesDataDisplay/ExpensesDataDisplay";
import ExpenseItemsContainer from "./components/Modules/ExpenseItemsContainer/ExpenseItemsContainer";

const App = () => {
  const [expenseItems, setExpenseItems] = useState(sampleData);
  const [yearsList, setYearsList] = useState(getYears(expenseItems));

  const [selectedYear, setSelectedYear] = useState(null);

  const selectedYearChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
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

      <ExpenseItemsContainer key={selectedYear} selectedYear={selectedYear} expensesArray={expenseItems} />
    </div>
  );
};

export default App;
