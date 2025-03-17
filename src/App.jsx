import React,{useState,useEffect} from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedTransaction =
      JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(storedTransaction);
  }, []);


  const addTransaction=(newTransaction)=>{
    const updateTransaction=[...transactions,newTransaction]
    setTransactions(updateTransaction)
    localStorage.setItem("transactions",JSON.stringify(updateTransaction))
  }

  return (
    <div> 
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionList transactions={transactions}/>
      <AddTransaction addTransaction={addTransaction} />
    </div>
  );
}

export default App;
