const INITIAL_STATE={username:'Seto',email:'abcd@gmail.com'}

export default(state=INITIAL_STATE,action)=>{
    if(action.type=='UBAH_USER'){
        return {...INITIAL_STATE, username: action.payload} // kayak map tapi di object
    } else{
       return state; 
    }
    
}