import React from 'react'

class Latihan3 extends React.Component{
    state={ganti:''}
    onTxtChanged=()=>{
        var convert=this.refs.kata.value;
        var tampil=''
        // for(var i=0;i<convert.length;i++){
        //     if(convert.charAt(i)!='a' &&
        //     convert.charAt(i)!='i' &&
        //     convert.charAt(i)!='u'&&
        //     convert.charAt(i)!='e'&&
        //     convert.charAt(i)!='0'){
        //         tampil+=convert.charAt(i)
        //     }
        // }
        tampil=convert.replace(/a|i|u|e|o/g,'')
        this.setState({ganti:tampil})
    }
    render(){
        return(
            <div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Enter Words</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" onChange={this.onTxtChanged} ref="kata" rows={12} cols={50}></textarea>
                    {/* Global State pake this.props.(nama props dari mapStateToProps --> jumlah) */}
                    <label for="exampleFormControlTextarea1">Hasil Konversi: {this.state.ganti}</label>  
                </div>
            </div>
        )
    }
}

export default Latihan3;