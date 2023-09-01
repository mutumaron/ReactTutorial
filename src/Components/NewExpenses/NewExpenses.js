import React from "react";

import './NewExpenses.css';
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {

    const saveDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    return <div className="new-expense">
        <ExpenseForm onSaveData={saveDataHandler} />
    </div>
};

export default NewExpenses;
