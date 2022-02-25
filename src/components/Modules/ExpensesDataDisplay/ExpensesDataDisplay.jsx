import React, { useState } from "react";

import "./ExpensesDataDisplay.scss";

const ExpensesDataDisplay = (props) => {
  const [listOfYears] = useState([...props.yearsList]);

  const latestYear = listOfYears[0];

  const [selectedYear, setSeletcedYear] = useState(latestYear);

  const handleYearChange = (event) => {
    setSeletcedYear(event.target.value);

    props.onSelectedYearChange(event.target.value);
  };

  return (
    <div className="data-display">
      <div className="data-display__title">Filter By date : {selectedYear}</div>
      {/* Dropdown Selector */}
      <div className="data-display__selector">
        <select
          onChange={handleYearChange}
          className="data-display__selector__dropdown"
          name="filter-selector"
          id="filter-selector"
        >
          <option value={null}>All</option>
          {listOfYears && listOfYears.length && listOfYears.map((year, index) => <option key={index}>{year}</option>)}
        </select>
      </div>
    </div>
  );
};

export default ExpensesDataDisplay;
