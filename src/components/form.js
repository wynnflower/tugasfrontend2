import React from 'react'
import{ fnUbahUser } from '../1. actions'
import{ connect } from 'react-redux'
import './../support/css/cssform.css'


//inline
//external
class Form  extends React.Component{
    state={name:'',maile:'',pass:''}
    handleButton=()=>{
        var nama=this.refs.username.value // ngambil value dari ref username dalam tag input
        // alert(nama)
        this.props.fnUbahUser(nama)
        var email=this.refs.email.value
        var password=this.refs.password.value
        this.setState({name:nama,maile:email,pass:password})
        // this.setState({name:nama})
        // this.setState({maile:email})
        // this.setState({pass:password})
    }
    // di luar render hanya bisa bikin function, bikin variabel di dalam render()
    render(){
        
        var hidden={color:'red',fontSize:'20px'};
        return(
            <div className='container' style={{border:'1px solid black'}}>
                <form>
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <div className="form-group">
                                <label htmlFor="exampleInputUsername1" class="ijo">Username</label>
                                <input type="text" className="form-control" id="exampleInputUsername1" aria-describedby="emailHelp" placeholder="Enter Username"  ref='username' />
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" style={hidden} >Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" ref='email'/>
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" style={hidden} >Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  ref='password'/>
                            </div>
                            <input type="button" className="btn btn-primary" value="Submit" onClick={this.handleButton}></input>
                            
                        </div>
                        {/* <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows={7} defaultValue={""} />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.props.fn}>Submit</button>
                            <input type="button" className="btn btn-primary" value="HandleBtn" onClick={this.handleButton}></input>

                        </div> */}
                    </div>
                    </form>
                    <div className="row justify-content-center">
                        <div className="col">
                            <h2>{this.state.name}</h2>
                            <h2>{this.state.maile}</h2>
                            <h2>{this.state.pass}</h2>
                        </div>
                    </div>
            </div>
        );
    }
}

export default connect(null,{fnUbahUser})(Form); // parameter 1 null karena nggak perlu ngakses Global State, parameter 2 = action creator