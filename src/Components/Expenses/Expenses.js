import React, { useState } from "react";

// import ExpenseItem from './ExpenseItem';
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  //   const filterChangeHandler = selectedYear => {
  //     setFilteredYear(selectedYear);
  //   };

  // let filterInfoText = "2021,2022 & 2023";

  // if (filteredYear === "2020"){
  //     filterInfoText = "2021,2022 & 2023";
  // }else if(filteredYear === "2021"){
  //     filterInfoText = "2020,2022 & 2023";
  // }else if(filteredYear === "2022"){
  //     filterInfoText = "2020,2021 & 2023";
  // }else{
  //     filterInfoText = "2020,2021 & 2022";
  // }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
