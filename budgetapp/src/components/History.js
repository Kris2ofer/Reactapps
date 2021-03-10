import React, { useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import ListTransac from './ListTransac';

export const History = () => {
    const { transactions } = useContext(GlobalContext);

  
    return (
        <>
            <h3>Transaction history</h3>
            <ul className="list">
                {transactions.map(transaction => (<ListTransac key={transaction.id} transaction={transaction}/>))}     
            </ul>
        </>
    )
}
export default History;