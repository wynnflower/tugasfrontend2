import React from 'react'

class Latihan2 extends React.Component{
    state={number:0,total:0}
    nambahin=()=>{
        var nambah=this.state.number
        //this.setState({number:nambah+1})
        // this.nginput()
        var input=this.refs.angka.value
        var kali=input*(this.state.number+1)
        this.setState({number:nambah+1,total:kali})
    }
    ngurangin=()=>{
        var ngurang=this.state.number
        if(ngurang>0){
           this.setState({number:ngurang-1}) 
           var input=this.refs.angka.value
        var kali=input*(this.state.number-1)
        this.setState({number:ngurang-1,total:kali})
        }
        // this.nginput()
        
       // this.setState({total:kali})
        
    }
    nginput=()=>{
        var input=this.refs.angka.value
        var kali=input*this.state.number
        this.setState({total:kali})
    }
    render(){
        return(
            <div>
                <div className="operator">
                <input type="button" value="-" onClick={this.ngurangin}></input>
                &nbsp;{this.state.number}&nbsp;
                <input type="button" value="+" onClick={this.nambahin}></input>
                </div>
                <br></br>
                <div className="input">
                <input type="text" ref="angka" onChange={this.nginput}></input>
                </div>
                <h2>
                    {this.state.total}
                </h2>
            </div>
        )
    }
}
export default Latihan2