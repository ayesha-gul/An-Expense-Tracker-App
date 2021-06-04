

export default (state,action) => {
    switch(action.type) {
        case 'DeleteTransaction':
            return {
                ...state,
                Transactions: state.Transactions.filter(Ayesha => Ayesha.id 
                    !== action.payload)
            }
            case 'AddTransaction':
                return {
                    ...state,
                    Transactions: [action.payload, ...state.Transactions]
                }
    default:
        return state ;
    }
}
