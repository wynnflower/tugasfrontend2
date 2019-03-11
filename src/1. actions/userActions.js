export const fnUbahUser=(nama)=>{
    return{
        type:'UBAH_USER', // type
        payload:nama // sesuatu yang dikirim (parameter yg dikirim) --> yg mau diganti / map
    }
}