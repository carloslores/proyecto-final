import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom'

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { 
     username: '',
     password: '',  
     Redirect:false,
    };
    this.service = new AuthService();
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
  
    this.service.signup(username, password)
    .then( response => {
       
        this.setState({
            username: "", 
            password: "",
            Redirect: true,
        },() => {
          this.props.toggleSignup();

        });
       
    })
    .catch( error => console.log(error.response) )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
      
  
  render(){

    let classes = 'Signup ';
    classes += this.props.show ? 'show' : 'hide'
   

    return(       
      
      
    
      <div className={classes}>
      <div className="form-signup">
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label><br></br>
          <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/><br></br>
          
          <label>Password:</label><br></br>
          <textarea name="password" value={this.state.password} onChange={ e => this.handleChange(e)} /><br></br>
          <label for="rol">Tipo de usuario</label><br></br>
                <select name="role" id="">
                  <option value="Usuario">User</option>
                  <option value="Artist">Artist</option>
                  
                </select><br></br>
          
          <input type="submit" value="Signup" />
        </form>
  
        <p>Already have account? 
            <Link to={"/"}> Login</Link>
        </p>
  
      </div>
      </div>
    )
  }

}

export default Signup;