export const fnProsesWord=(kata)=>{
    return{
        type:'PROSES_HURUF', // type
        payload:kata // sesuatu yang dikirim (parameter yg dikirim) --> yg mau diganti / map
    }
}