const innitialState =0
export const  CounterNumber=(state=innitialState,action)=>{
    switch (action.type) {
        case "increment": return state+1;
        case "decrement": return state-1;
        default: return state;
    }
}