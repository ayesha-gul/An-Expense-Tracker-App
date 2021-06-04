import React,{createContext,useReducer} from "react";
import AppReducer from './AppReducer'

const initialState={
Transactions:[
    {id:1 , Text:'Flower',amount:-20},
    {id:2 , Text:'Salary',amount:300},
  
]
}

//create Context
export const GlobalContext=createContext(initialState);

//create provider
//wrapping All components in it as a children 

export const GlobalProvider = ({children}) =>{
    const [state,dispatch]=useReducer(AppReducer,initialState)

// Actions
function DeleteTransaction (id) {
    dispatch ({
    type: 'DeleteTransaction',
    payload: id
    });

  console.log(DeleteTransaction)

}
function AddTransaction (transaction) {
    dispatch ({
        type: "AddTransaction",
        payload: transaction
    });
}


    return(
        <GlobalContext.Provider value={{
            Transactions : state.Transactions,
            DeleteTransaction,
            AddTransaction
            
             
        }}>
            {children}
        </GlobalContext.Provider>
    )
}