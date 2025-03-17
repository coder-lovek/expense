import React,{useState,useEffect} from 'react'

const Balance = ({Balance}) => {
  const [balance,setBalance]=useState(0)

  useEffect(()=>{
    setBalance(Balance)

  })


  return (
    <div className='balance'>
        <h4>
            Your balance
        </h4>
        <h1>
            {balance}
        </h1>

    </div>
  )
}

export default Balance