import React, {useContext, useState} from "react";
import {AppContext} from "../context/AppContext"


const Budget = () => {
    const {budget, currency, dispatch, expenses} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        let payload = event.target.value;
        if (event.target.value > 20000){
            alert("Budget cannot be greater than 20000");
            payload = 20000;
        }
        else if(event.target.value < totalExpenses){
            alert("Budget cannot be lower than spending");
            payload = totalExpenses;
        }
        else payload = event.target.value;

        setNewBudget(payload);
        dispatch({
            type: "SET_BUDGET",
            payload: payload
        })
    }

    return(
        <div className='alert alert-secondary'>
        <span>Budget: {currency}{budget}</span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    )

};

export default Budget;
