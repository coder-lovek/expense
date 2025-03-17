import React,{useEffect, useState} from 'react'

const IncomeExpense = ({transactions,incomeExpense}) => {
  const [income,setIncome]=useState(0);
  const [expense,setExpense]=useState(0);
  useEffect(()=>{
    let inc=0,exp=0
    transactions.forEach((t)=>{
      if(t.amount>0){
        inc+=t.amount;
      }
      else{
        exp-=Math.abs(t.amount);
      }
    })
    setExpense(exp);
    setIncome(inc);
    incomeExpense(inc-Math.abs(exp))
  },[transactions])
  return (
    <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p className="money plus">{income}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p className="money minus">{expense}</p>
        </div>
        
    </div>
  )
}

export default IncomeExpense