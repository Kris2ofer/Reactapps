export default (state, action) => {
    switch(action.type) {
        case 'DELETE':
            return {
               ...state,//reducer changes state but we have to send down complete new initial state inorder to change it
               transactions: state.transactions.filter(transaction => transaction.id !==
                action.payload)
            }
        case 'ADD':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}