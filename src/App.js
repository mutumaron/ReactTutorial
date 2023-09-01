// import "./App.css";
import React,{useState} from "react";

import Expenses from "./Components/Expenses/Expenses";
import NewExpenses from "./Components/NewExpenses/NewExpenses";

const default_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.24,
    date: new Date(2021, 7, 14),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e3",
    title: "New Tv",
    amount: 799.49,
    date: new Date(2023, 2, 12),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 456.89,
    date: new Date(2022, 5, 12),
  },
];


function App() {

  const [expenses,setExpenses] = useState(default_Expenses);

  
  const addExpenseHandler = (expense) => {

    setExpenses((prevExpenses) => {
        return [expense,...prevExpenses]
    });

    // console.log(pulledData);
  };

  return (
    <div>
    <NewExpenses onAddExpense={addExpenseHandler} />
    <Expenses items={expenses}/>
    </div>

  );
}

export default App;
