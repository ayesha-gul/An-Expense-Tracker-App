import React,{useState, useContext} from 'react';
import { GlobalContext }from "./GlobalState";

export const AddTransaction = () => {
 

    const [text,setText] = useState("");
    const[amount,setAmount]=useState(0);

    const {AddTransaction} = useContext(GlobalContext)

    const onSubmit = e => {
      e.preventDefault();

      const newTransaction ={
      id: Math.floor(Math.random() * 1000000000),
      Text:text,
      amount: +amount
      }
      console.log(text);
  AddTransaction(newTransaction)
    }
    return (
        <div>
             <h3>Add new transaction</h3>
         
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" value={text} onChange={(e) =>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" id="amount"  value={amount} onChange={(e) =>setAmount(e.target.value)}  placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
            
      
    )
}
