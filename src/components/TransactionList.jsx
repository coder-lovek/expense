import React,{useState,useEffect} from "react";

const TransactionList = ({transactions,setTransactions}) => {

  const handleDelete=(id)=>{
    const updatedTransactions=transactions.filter((t)=>t.id!==id);
    setTransactions(updatedTransactions)
    localStorage.setItem("transactions",JSON.stringify(updatedTransactions))
  }


  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((t) => (
          <li key={t.id}>
            {t.text} <span>{t.amount}</span>

            <button onClick={()=>handleDelete(t.id)}>del</button>
          </li>
          
        ))}
        
      </ul>
    </div>
  );
};

export default TransactionList;
