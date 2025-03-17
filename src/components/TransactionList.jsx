import React,{useState,useEffect} from "react";

const TransactionList = ({transactions}) => {


  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((t) => (
          <li key={t.id}>
            {t.text} <span>{t.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
