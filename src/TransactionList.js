import React,{useContext} from 'react' ;
import { Transaction } from './Transaction';


import { GlobalContext} from './GlobalState';


export const TransactionList = () => {
  const {Transactions} = useContext(GlobalContext);
  
    return (
        <>
          
               <h3>History</h3>
      <ul  className="list">
      {Transactions.map(transaction=>(    <Transaction key={transaction.id} Ayesha={transaction}/>))}
  
        
      </ul>  
            
        </>
    );
}
