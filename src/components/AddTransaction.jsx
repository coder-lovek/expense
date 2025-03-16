import React ,{useState} from 'react'

const AddTransaction = () => {
    const [text,setText]=useState('')
    const [amount,setAmount]=useState(0)

    const handleSubmit=(e)=>{
        e.preventDefault()
        const newTransaction={
            id:Math.floor(Math.random()*100000000),
            text:text,
            amount:+amount
        }
        const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
        transactions.push(newTransaction);
        localStorage.setItem("transactions", JSON.stringify(transactions));
        setText('')
        setAmount(0)

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Text</label>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            <label htmlFor="">Amount</label>
            <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            <button>Add Transaction</button>
        </form>
    </div>
  )
}

export default AddTransaction