import React, { Component } from 'react';
//import logo from './logo.svg';
import Footer from './components/footer'
import Navbar from './components/header'
import Form from './components/form'
import Latihan from './components/latihan'
import Latihan2 from './components/latihan2'
import Latihan3 from './components/latihan3'
import PR from './components/prweekend'
import PR2 from './components/prweekend2'
//import { Button } from 'reactstrap';
import './App.css';
import {Route} from 'react-router-dom';
import Homepage from './components/homepage';
import Product from './components/product';

class App extends Component {
  btnClick=()=>{
    alert('Masuk')
  }
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <div className="App">
        <Navbar/>
        <div className="container" style={{backgroundColor:'rgba(220,220,220,0.5)'}}>
          {/* <Form fn={this.btnClick}/> */}
          <Route path='/' component={PR} exact></Route>
          <Route path='/form' component={Form}></Route>
          <Route path='/products' component={Product}></Route>
          <Route path='/latihan' component={Latihan}></Route>
          <Route path='/latihan2' component={Latihan2}></Route>
          <Route path='/latihan3' component={Latihan3}></Route>
          <Route path='/prweekend' component={PR}></Route>
          <Route path='/prweekend2' component={PR2}></Route>
          {/* <Button color="primary">Send</Button>
          <h1>Hello World</h1>
          <Footer nama='Andi' warna='red' fn={this.btnClick}>Karyawan</Footer>
          <Footer nama='Bagus' warna='rgba(0,0,255,0.5)'>Mahasiswa</Footer>
          <Footer nama='Seto' warna='yellow' weight='bold'/> */}
          
        </div>
        {/* <Footer></Footer> */}
      </div>


      
    );
  }
}

export default App;
