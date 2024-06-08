import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';


const SelectCurrency = () => {
    const {dispatch} = useContext(AppContext);
    
    const handleCurrencyChange = (event) => {
        dispatch({
            type:"CHG_CURRENCY",
            payload:event.target.value
        });
    }

    return(
        <div className='alert alert-secondary'>
            <h6 style={{display:'inline-flex'}}>Currency</h6>
            <select className='form-select form-select-sm bg-info' onChange={handleCurrencyChange}>
                <option value="$" selected="true">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    )

};

export default SelectCurrency;