import React from 'react'
//import{Link} from 'react-router-dom'
import{connect}from 'react-redux'
import {fnUbahToDo} from '../1. actions'

class PR extends React.Component{
    state={ngapain:[],tampil:[]}
    tambah=()=>{
        var toDo=this.refs.data.value
        this.state.ngapain.push(toDo)
        //var arrayBaru=[]
        // arrayBaru=[...this.state.ngapain]
        // arrayBaru.push[toDo]
        // arrayBaru=<tr>
        //     <td>
        //         1
        //     </td>
        // </tr>
        // alert(arrayBaru)
        var length=this.state.ngapain.length
        var data=this.state.ngapain.map((val,index)=>{
            return(
                    <tr>
                        <td>{index+1}</td>
                        <td>{val}</td>
                    </tr>
                //</div>
            )
        })
        this.setState({tampil:data})
        //this.setState({ngapain:arrayBaru})
        this.props.fnUbahToDo(length)
        //alert(this.state.tampil)
        //return tampilan
    }
    hapus=()=>{
        this.state.ngapain=[]
        var length=this.state.ngapain.length
        // alert(this.state.ngapain)
        this.setState({tampil:this.state.ngapain})
        this.props.fnUbahToDo(length)
    }
    convertTag=()=>{

        var tampil=this.state.ngapain.map((val,index)=>{
            return(
                    <tr>
                        <td>{index}</td>
                        <td>{val}</td>
                    </tr>
                //</div>
            )
        })
        return tampil
    }
    render(){
        return(
            <div>
                <div className="row" style={{textAlign:'left'}}>
                    <div className="col-6">
                    <br/><hr/>
                        <input type="text" ref="data" placeholder="What will you do?"></input>
                        <input type="button" value="Add" onClick={this.tambah}></input>
                    </div>
                    <div className="col-6">
                        What you will do:
                        <hr></hr>
                        <table>
                            {this.state.tampil}
                            <input type="button" value="Delete" onClick={this.hapus}></input>
                            {/* {this.props.jumlah} */}
                        </table>
                        
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{ 
    return {
        jumlah:state.todo.jmlToDo
    }
}

// export default PR;
export default connect(mapStateToProps,{fnUbahToDo}) (PR);