import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authService from '../components/auth/auth-service';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'




class NavbarComponent extends Component {

    constructor(props) {

        super(props)
      
        this.state = { loggedInUser: null }

        this.service = new authService()
       
    }


    

    componentWillReceiveProps(nextProps) {
        this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
    }


  

    render() {

        if (this.props.loggedInUser) {

            return (

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                <Navbar.Brand >Art & auction</Navbar.Brand>
                

                  <Nav className="mr-auto">
                    
                    <Link className="link-nav" to='/obras' href="#features">Ver pinturas</Link>                                   
                    
                  </Nav>

                  
                  <Nav>
                  <Button className="link-nav" onClick={this.props.logoutUser} variant="outline-secondary">Cerrar sesion</Button>              
                    
                  </Nav>
              

              </Navbar>

              
            )

            }else{

              return(

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                <Navbar.Brand >Art & auction</Navbar.Brand>
                

                  <Nav className="mr-auto">

                    <Link className="link-nav" to='/obras' href="#features">Ver pinturas</Link>                                   
                    
                  </Nav>

                  <Nav>
                  <Button className="link-nav" onClick ={this.props.toggleLogin}  variant="outline-secondary">Iniciar Sesión</Button>                
                   
                          
                    
                  </Nav>

                  <Nav>
                  <Button className="link-nav" onClick={this.props.toggleSignup} variant="outline-secondary">Registrate</Button>
                  
                          {/*<Link className="link-nav" to="/signup">Registrate</Link> */}             
                    
                  </Nav>
                  <Nav>
                  {/*<Button className="link-nav" onClick={this.logoutUser} variant="outline-secondary">Cerrar sesion</Button>
              {/*<Link className="link-nav" to="/"></Link> */}             
                    
                  </Nav>
              

              </Navbar>




              )
            }

        }
      }
        
           





export default NavbarComponent;