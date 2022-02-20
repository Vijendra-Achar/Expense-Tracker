import React from "react";

import ExpenseItem from "./components/Modules/ExpenseItem/ExpenseItem";
import CreateNewExpense from "./components/Modules/CreateNewExpense/CreateNewExpense";

import ExpensesDataDisplay from "./components/Modules/ExpensesDataDisplay/ExpensesDataDisplay";

const App = () => {
  let yearsList = [];

  const expenseItems = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      desc: "Example Description One",
      date: new Date(2020, 7, 14),
      type: "income",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      desc: "Example Description Two",
      type: "expense",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      desc: "Example Description Three",
      date: new Date(2021, 2, 28),
      type: "income",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      desc: "Example Description Four",
      date: new Date(2021, 5, 12),
      type: "expense",
    },
  ];

  yearsList = expenseItems.map((expense) => {
    const year = new Date(expense.date).getFullYear();
    return year;
  });

  yearsList = [...new Set(yearsList)];

  const selectedYearChangeHandler = (selectedYear) => {
    console.log("The Year hosted up -> ", selectedYear);
  };

  return (
    <div>
      <div>
        <CreateNewExpense />
      </div>

      <div>
        <ExpensesDataDisplay yearsList={yearsList} onSelectedYearChange={selectedYearChangeHandler} />
      </div>

      {expenseItems.map((expense) => {
        return <ExpenseItem key={expense.id} expense={expense} />;
      })}
    </div>
  );
};

export default App;
