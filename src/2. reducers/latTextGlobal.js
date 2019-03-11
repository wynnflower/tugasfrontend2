const INITIAL_STATE={jmlkata:0}

export default(state=INITIAL_STATE,action)=>{
    if(action.type=='PROSES_HURUF'){
        return {...INITIAL_STATE, jmlkata: action.payload} // kayak map tapi di object
    } else{
       return state; 
    }
}