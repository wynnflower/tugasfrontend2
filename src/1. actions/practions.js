export const fnUbahToDo=(todo)=>{
    return{
        type:'UBAH_TODO', // type
        payload:todo // sesuatu yang dikirim (parameter yg dikirim) --> yg mau diganti / map
    }
}