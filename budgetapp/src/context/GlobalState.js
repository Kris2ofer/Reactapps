import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
    transactions: [
        {id: 1, text: 'Harddrive', amount: -250},
        {id: 2, text: 'Salary', amount: 1500},
        {id: 3, text: 'Laptop', amount: -450},
        {id: 4, text: 'Loan', amount: 850},
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider> );
}