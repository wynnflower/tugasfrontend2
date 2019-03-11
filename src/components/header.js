import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import{Link} from 'react-router-dom'
import{connect}from 'react-redux'

// export default 
class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="danger" light expand="md">
        <Link to='/'><NavbarBrand href='/'>{this.props.nama.username}</NavbarBrand></Link>  
        {/* // this.props(ngakses property).nama (dari mapStateToProps di bawah).username(dari userGlobal.js) */}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to='/form' style={{textDecoration:'none'}}><NavLink>Login</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to='/prweekend2' style={{textDecoration:'none'}}><NavLink>Movie</NavLink></Link>
              </NavItem>
              <NavItem>
                <NavLink style={{color:'white'}}>ToDo {this.props.todo}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Register</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps =(state)=>{ // convert dari state jadiin props (nama=props nya, state.user = state nya dari index.js --> userGlobal.js)
  return {nama:state.user,
  buah:state.product.namaProduct,
  jumlah:state.kata.jmlkata,
  todo:state.todo.jmlToDo} // nama(bebas): state(parameter).user(dari index.js) di reducer
  // return {nama:state.user.username} // nama(bebas): state(parameter).user(dari index.js).username(dari userGlobal.js))
  // return {nama:state.user.email} // nama(bebas): state(parameter).user(dari index.js).email(dari userGlobal.js))
}

export default connect(mapStateToProps) (Example);