import React from 'react'
import {connect} from 'react-redux'
import {fnProsesWord} from '../1. actions'

class Latihan extends React.Component{
    state={text:''}
    onTxtChanged=()=>{
        var kata = this.refs.Kata.value
        var jml=kata.split(' ')
        //var tesKata=kata.split('')
        //var arr=[]
        var jmlength=jml.length
        // if (tesKata.length>0){
            for (var i=0;i<jml.length;i++){
                        // for(var j=1;j<=i;j++){
                            if(jml[i]==[]){
                                //alert('spasi dobel')
                                //tesKata.splice(1,tesKata.length)
                                jmlength-=1
                                // alert(jmlength)

                            // } else {
                                
                            }
                            
                        // }
                    }

        //}
        
        if(kata=='' && jml.length==1){
            this.props.fnProsesWord(0)
            // alert('cek')
            
        } else{
            // alert(kata + jml.length)
            //this.props.fnProsesWord(jml.length) // masukkin ke Global State
            this.props.fnProsesWord(jmlength)
        }
        
        this.setState({text:jml.length}) // Local State ->tidak berlaku global
    }
    render(){
        return(
            <div>
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Your Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" onChange={this.onTxtChanged} ref="Kata" rows={12} cols={50}></textarea>
                    {/* Global State pake this.props.(nama props dari mapStateToProps --> jumlah) */}
                    <label for="exampleFormControlTextarea1">Jumlah kata Global State:{this.props.jumlah}</label>  
                    {/* Yang diakses global state, bukan local state ^ Global State v Local State*/}
                    <br></br>
                    {/* Local State pake this.state.(nama state--> text) */}
                    <label for="exampleFormControlTextarea1">Jumlah kata Local State:{this.state.text}</label> 
                </div>
                {/* <h4>Your Message:</h4>
                <textarea ref="Kata" onChange={this.onTxtChanged} rows={12} cols={50}></textarea> */}
                {/* <h4>Jumlah kata:{this.state.text}</h4> */}
                {/* <h4>Jumlah kata:{this.props.jumlah}</h4> */}
            </div>
            
        )
    }

}
const mapStateToProps =(state)=>{ // convert dari state jadiin props (nama=props nya, state.user = state nya dari index.js --> userGlobal.js)
    return {
    jumlah:state.kata.jmlkata} // nama(bebas): state(parameter).user(dari index.js) di reducer
    // return {nama:state.user.username} // nama(bebas): state(parameter).user(dari index.js).username(dari userGlobal.js))
    // return {nama:state.user.email} // nama(bebas): state(parameter).user(dari index.js).email(dari userGlobal.js))
  }
export default connect(mapStateToProps,{fnProsesWord})(Latihan) // biar bisa akses global pake mapStateToProps