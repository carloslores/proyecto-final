import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router'


class Login extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', Redirect:false };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service.login(username, password)
    .then( response => {
        this.setState({ username: "", password: "" , Redirect:true});
        // this.props.getUser(response)
        // window.location.assign("/signup")
        
    })
    .catch( error => console.log(error) )
  }
    
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
    
  render(){
    return(
        <div>
        {this.state.Redirect ? <Redirect to='/' /> :
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label><br></br>
          <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/><br></br>
          <label>Password:</label><br></br>
          <textarea name="password" value={this.state.password} onChange={ e => this.handleChange(e)} /><br></br>
          
          <input type="submit" value="Login" /><br></br>
        </form>
        <p>Don't have account? 
            <Link to={"/signup"}> Signup</Link>
        </p>
      </div>}
      </div>
    )
  }
}

export default Login;