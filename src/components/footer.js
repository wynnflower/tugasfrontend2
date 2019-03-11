//Class Components
//Props //properties => Transfer data dari parent ke child
import React from 'react'

class Footer extends React.Component{
    state={number:1}
    handleState=()=>{
        var nambah=this.state.number
        this.setState({number:nambah+1})
    }
    render(){
        // var nama='Andi'
        return(
            <div style={{position:'fixed',left:0,bottom:0,height:'100px;',color:'black',width:'100%'}}>
            Ini Footer
                {/* <h1 style={{color:this.props.warna,fontWeight:this.props.weight}}>Ini Footer {this.props.nama}</h1>
                <h2>{this.props.children}</h2>
                <h3>{this.state.number}</h3>
                <input type="button" value="Fn Dari Parent" onClick={this.handleState}></input> */}
            </div>
        )
    }
}

export default Footer;

//Function Components