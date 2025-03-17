import React,{useState,useEffect} from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

/*
 1-when the user inputs the val and the amount... the onSubmit event is fired
 2-addTransaction is sent as a prop...so the new transaction is recieved and is add to the local storage
 3-this is done beacuse each time a state is changes in the app.jsx, the entire ui is updated
*/


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


  const [balance,setBalance]=useState(0);

  const incomeExpense=(newbalance)=>{
    setBalance(newbalance)

  }

  return (
    <div> 
      <Header />
      <Balance Balance={balance}/>
      <IncomeExpense transactions={transactions} incomeExpense={incomeExpense}/>
      <TransactionList transactions={transactions} setTransactions={setTransactions}/>
      <AddTransaction addTransaction={addTransaction} />
    </div>
  );
}

export default App;
