import React from 'react'
import Axios from 'axios'

class Weekend2 extends React.Component{
    state={listFilm:[],isSearch:0}
    getFilm=()=>{
        var search=this.refs.carifilm.value

        Axios.get('http://www.omdbapi.com/?s='+search+'&apikey=6a953632')
        .then((res)=>{
            //alert('masuk')
            console.log(res.data.Search[0].Title)
            this.setState({listFilm:res.data.Search,isSearch:1})
            
            //alert(res.data.Search[0].Title)
            }
        )
        .catch((err)=>{
            console.log(err)
            this.setState({listFilm:[],isSearch:1})
        })
        
        
    }
    renderErrorMessage=()=>{
            if(this.state.listFilm.length==0 && this.state.isSearch==1){
            return <div class="alert alert-danger mt-3" role="alert">
                Movie tidak ditemukan
            </div>
            }
            return(
                <div>

                </div>
            )
        
    }
    renderFilm=()=>{
        var jsx=this.state.listFilm.map((val)=>{
            return(
                <div className="col-lg-4 produk mb-3">
                    <div className="card" style={{width: '18rem'}}>
                        <img className="card-img-top" src={val.Poster} alt={val.Title} />
                        <div className="card-body">
                            <p className="card-text" /><h4>{val.Title}</h4><p />
                            <p className="card-text" /><h5>{val.Type}</h5><p />
                            <p className="card-text" /><h5>{val.Year}</h5><p />
                        </div>
                    </div>
                </div>    
            )
        })
        return jsx
    }
    render(){
        
        return(
            <div>
                <h1>Selamat Datang di Movie</h1>
                <div>
                    <input className="mr-5" type="text" ref="carifilm"/>
                    <input type="button" value="Search" className="btn btn-primary" onClick={this.getFilm}/>
                </div>
                <hr></hr>
                <div class="row justify-content-center">
                    {this.renderErrorMessage()}
                    {this.renderFilm()}
                </div>
            </div>
        )
    }
}
export default Weekend2