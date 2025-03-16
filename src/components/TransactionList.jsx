import React, { useEffect,useState } from 'react'

const TransactionList = () => {
 
  return (
    <div>
        <h3>History</h3>
        <ul id="list" className="list">
            {
              transactions.map((t)=>(
                <li key={t.id}>
                  {t.text} <span>{t.amount}</span>
                </li>
              ))
            }
        </ul>
    </div>
  )
}

export default TransactionList