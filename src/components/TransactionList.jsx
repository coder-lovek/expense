import React, { useState, useEffect } from "react";

const TransactionList = ({ transactions, setTransactions }) => {
  const handleDelete = (id) => {
    const updatedTransactions = transactions.filter((t) => t.id !== id);
    setTransactions(updatedTransactions);
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
  };

  return (
    <div className="history">
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((t) => (
          <li key={t.id} className="list-item">
            <div>{t.text}</div>
            <div>{t.amount}$</div>
            <div>
              <button onClick={() => handleDelete(t.id)}>del</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
