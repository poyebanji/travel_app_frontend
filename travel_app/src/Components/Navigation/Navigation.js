import React from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap'

const Navigation = ({onRouteChange}) => {
    return (
        <React.Fragment>
      
            {/* <div onClick = {()=>onRouteChange('signin')}> Sign In</div>
            <div onClick = {()=>onRouteChange('signout')}> Sign Out</div> */}
            <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Logo</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link onClick = {()=>onRouteChange('signout')} href="/">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="profile">Profile</Nav.Link>
    </Nav>
    <Nav >
      {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
      <Nav.Link href="contact">Contact us</Nav.Link>      
    </Nav>
    <Button onClick = {()=>onRouteChange('signin')}  variant="outline-info">Signin</Button>
  </Navbar>

      
            
        </React.Fragment>
    );
};

export default Navigation;