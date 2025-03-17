import React, { useState } from "react";

const AddTransaction = ({ addTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="transaction-form">
          <div className="form-div">
            <label>Text</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="form-div">
            <label htmlFor="">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button>Add Transaction</button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
