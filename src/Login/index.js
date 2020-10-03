import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App/AppProvider';
import AuthApiService from '../services/auth-api-service';

import Page from '../Shared/Page';
import './Login.css';
import ErrorImage from '../Register/error.svg';

// Login Form Component
class Login extends Component {
  static contextType = AppContext;
  state = {
    email: '',
    password: '',
    error: null
  }

  // handle login form submission
  handleSubmit = async e => {
    e.preventDefault();
    this.setState({error: null})
    const {setLoading} = this.context
    try {
      setLoading(true)
      const {email, password} = this.state;
      const savedUser = await AuthApiService.login(email, password)
      this.context.login(savedUser.authToken)
      this.context.setCurrentUser(savedUser.user);
      this.context.getUserCoins(savedUser.user.id);
      setLoading(false)
    } catch(err) {
      this.setState({error: err.message}, setLoading(false))
    }
  }

  componentWillUnmount() {
    this.setState({error: null})
  }

  // handle form entries as they change
  handleChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    }, name === 'password' ? this.validateUserPassword : null)
  }

  render() {
    const { setPage } = this.context
    return (
      <Page name="login">
          <div className="modal-container" id="modal">
              <div className="modal">

                <button className="close-btn" id="close" onClick={() => setPage('settings')}>
                  <i className="fa fa-times"></i>
                </button>

                <div className="modal-header">
                  <h3>Login</h3>
                  <div className="header-acct">
                  <p>Don't have an account?</p>
                  <Link to='/' className="nav-link" onClick={() => this.context.setPage('register')}>Register here</Link>
                  </div>
                </div>

                <div className="modal-content">
                  <p>Login to see your curated list of coins!</p>
                    <form className='js-login-form' action='#' onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                      <label htmlFor='email'>Email</label>
                      <input type='text' id='email' name='email' value={this.state.email} placeholder='Enter email here.' onChange={this.handleChange} autoComplete="on"/>
                    </div>

                    <div className='form-group'>
                      <label htmlFor='password'>Password</label>
                      <input type='password' id='password' name='password' value={this.state.password} placeholder='Enter password here.' onChange={this.handleChange} autoComplete="on"/>
                    </div>
                    <div className='error-msg'>{this.state.error ? <img id="error-img" src={ErrorImage} alt="error" /> : null}{this.state.error}</div>
                    <div className='form-controls'>
                      <button type='submit' className='button full outline'>Log In</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </Page>
    )
  }
};

export default Login;
