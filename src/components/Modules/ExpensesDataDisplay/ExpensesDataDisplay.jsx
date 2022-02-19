import React, { useState } from "react";

import "./ExpensesDataDisplay.scss";

const ExpensesDataDisplay = (props) => {
  const [listOfYears, setListOfYears] = useState([...props.yearsList]);

  const handleYearChange = (event) => {
    console.log("The Year selected", event.target.value);
  };

  return (
    <div className="data-display">
      <div className="data-display__title">Filter By date</div>
      {/* Dropdown Selector */}
      <div className="data-display__selector">
        <select
          onChange={handleYearChange}
          className="data-display__selector__dropdown"
          name="filter-selector"
          id="filter-selector"
        >
          {listOfYears && listOfYears.length && listOfYears.map((year, index) => <option key={index}>{year}</option>)}
        </select>
      </div>
    </div>
  );
};

export default ExpensesDataDisplay;
