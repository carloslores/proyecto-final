import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authService from '../components/auth/auth-service';







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
     
        <main>  
          <a  class="toggle-menu">&equiv;</a> 

          <div class="menu">               

                    <h1 className="title">Art & auction</h1>

                    <Link className="ref-obra" to='/obras'>Obras</Link> 

                    <small>Bienvenido: {this.props.loggedInUser}</small><br></br>                            
                
                
              <ul>
                  <li>
                                                   
                
					            <a id="cerrar"className="link-nav" onClick={this.props.logoutUser} variant="outline-secondary" >Cerar Sesion</a>
			          	</li>
               
              </ul>    

            </div>
      </main>
              
            )

            }else{

              return(
               
      <main>                    
        <a  class="toggle-menu">&equiv;</a>
          <div class="menu">
               
               
            <h1 className="title">Art & auction</h1>
                
                <Link className="ref-obra" to='/obras'>Obras</Link>
                
            <ul>
                  
                <li>
                  <a  onClick ={this.props.toggleLogin} >Iniciar Sesión</a>                  
                          
                    
                </li> 
                  
                  
                <li>
					         <a  onClick={this.props.toggleSignup} >Registrate</a>
			          </li>
               
            </ul>           

          </div>
        </main>
              


              )
            }

        }
      }
        
           





export default NavbarComponent;