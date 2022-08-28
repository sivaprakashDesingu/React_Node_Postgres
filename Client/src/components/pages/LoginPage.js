import React from "react";
import PropTypes from 'prop-types';
import { userLoggedIn } from './../../actions/auth';
import { connect } from 'react-redux';
import LoginForm from '../forms/LoginForm';
import axios from 'axios';

const BASE_URL = `http://localhost:5000`;
class LoginPage extends React.Component{

  submit = async (data) => {
    try{
      const results = await axios.post(BASE_URL+'/login', {user: data.email,password: data.password});
      if(results.data && results.data.status === "OK"){
        this.props.userLoggedIn(results.data.data)
        this.props.history.push("/home")
      }
    }catch(e) {
      console.log(e)
    }
   
  };
  
  render(){
    return (
      <div>
        <h1>Login Page</h1>

        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired, 
  login: PropTypes.func.isRequired
}



export default connect(null, { userLoggedIn })(LoginPage);