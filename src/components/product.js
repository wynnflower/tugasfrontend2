import React from 'react'
import Axios from 'axios'

class Product extends React.Component{
    state={user:'Orang Asing',listProduct:[]}

    componentDidMount(){
        //Setelah Render selesai
        // Axios.get('http://localhost:2000/product')
        // // .then((res)=> console.log(res))
        // // .then((res)=> console.log(res.data))
        // // .then((res)=> console.log(res.data[0]))
        // // .then((res)=> console.log(res.data[0].nama))

        // .then((res)=>
        //     this.setState({listProduct:res.data})
        // )
        // .catch((err)=>console.log(err))
        // console.log('Ini Did Mount '+this.state.user)
        this.getProduct()
    }

    getProduct=()=>{
        Axios.get('http://localhost:2000/product')
        // .then((res)=> console.log(res))
        // .then((res)=> console.log(res.data))
        // .then((res)=> console.log(res.data[0]))
        // .then((res)=> console.log(res.data[0].nama))

        .then((res)=>
            this.setState({listProduct:res.data})
        )
        .catch((err)=>console.log(err))
        console.log('Ini Did Mount '+this.state.user)
    }

    renderProduct=()=>{
        var jsx=this.state.listProduct.map((val)=>{
            return(
                <div>
                    <h1>{val.nama}</h1>
                    <h4>{val.harga}</h4>
                </div>
            )
        })
        return jsx
    }
    // componentWillMount(){
    //     //Sebelum Render
    //     // NOTE:sudah mau not supported
    //     this.setState({user:'Yayan'})
    //     console.log('Ini Will Mount '+this.state.user)
    // }
    componentDidUpdate(){
        // setelah ada setState / Perubahan dan setelah render
        console.log('Ini Did Update '+this.state.user)
    }
    // componentWillUpdate(){
    //     // setelah ada setState / Perubahan dan sebelum render
    //     console.log('Ini Will Update '+this.state.user)
    // }
    fn=()=>{
        console.log('render')
    }
    fnSetState=()=>{
        this.setState({user:'Joni'})
    }
    render(){
        return(
            <div>
                Selamat Datang
                <h1>Tes</h1>
                <input type="button" value="setState" onClick={()=>this.fnSetState()}/>
                {this.fn()}
                {this.renderProduct()}
            </div>
        )
    }
}

export default Product