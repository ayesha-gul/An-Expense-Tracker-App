import React,{useContext} from 'react'
import { GlobalContext} from './GlobalState';


export const Transaction = ({Ayesha}) => {
  const {DeleteTransaction} = useContext(GlobalContext)
  const sign = Ayesha.amount < 0 ? '-':'+' ;
 

  return (
    <li className= {Ayesha.amount < 0 ? 'minus' : 'plus'} >
      {Ayesha.Text} <span>{sign}${Math.abs(Ayesha.amount)}</span><button className="x-btn" onClick={() => DeleteTransaction(Ayesha.id)} className="delete-btn" >x</button>
    </li>
  )
}