import React from 'react'
import {connect} from 'react-redux'

class Homepage extends React.Component{
    render(){
        var {username,email}=this.props.nama
        return(
            <div>
                <h1>Selamat Datang di Indomaret, Selamat Belanja!</h1>
                <h2>{this.props.nama.username}</h2> 
                <h2>{this.props.nama.email}</h2>
                <h2>{username}</h2> 
                <h2>{email}</h2>
                <h2>{this.props.buah}</h2>
            </div>
        ) // ngambil dari state.user.username & email
    }
}

const mapStateToProps =(state)=>{ // convert dari state jadiin props, ngambil dari GlobalState di index.js
    return {nama:state.user,
    buah:state.product.namaProduct} // nama(bebas): state(parameter).user(dari index.js--createStore)
    // return {nama:state.user.username} // nama(bebas): state(parameter).user(dari index.js).username(dari userGlobal.js))
    // return {nama:state.user.email} // nama(bebas): state(parameter).user(dari index.js).email(dari userGlobal.js))
}

export default connect(mapStateToProps) (Homepage);