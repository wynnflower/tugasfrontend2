const INITIAL_STATE={jmlToDo:0}

export default(state=INITIAL_STATE,action)=>{
    if(action.type=='UBAH_TODO'){
        return {...INITIAL_STATE, jmlToDo: action.payload} // kayak map tapi di object
    } else{
       return state; 
    }
    
}