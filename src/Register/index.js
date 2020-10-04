import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Validator from '../Validator/Validator';
import { AppContext } from '../App/AppProvider';
import AuthApiService from '../services/auth-api-service';

import Page from '../Shared/Page';
import './Register.css';
import ErrorImage from './error.svg';

// Register form component
class Register extends Component {
  static contextType = AppContext;
  state = {
    user_name: '', user_name_valid: false,
    email: '', emailValid: false,
    password: '', passwordValid: false,
    newUser: '',
    formValid: false,
    error: null,
    validationError: {}
  }

  // handle user registration submission
  handleSubmit = async e => {
    e.preventDefault();
    this.setState({error: null})
    const {user_name, email, password} = this.state
    const user_email = email;
    const user_password = password;
    const newUser = {user_name, user_email, user_password}
    const {setLoading} = this.context;

    try {
      setLoading(true)
      const inputNewUser = await AuthApiService.createUser(newUser)
      this.setState({ newUser: inputNewUser });
      const {email, password} = this.state;
      const savedUser = await AuthApiService.login(email, password)
      this.context.login(savedUser.authToken);
      this.context.setCurrentUser(savedUser.user);
      setLoading(false)

    } catch(err) {
      this.setState({error: err.message}, setLoading(false))
    }
  }

  componentWillUnmount() {
    this.setState({error: null})
  }

  // handle changes to inputs on registration form
  handleChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    }, name === 'password' ? this.validateUserPassword : null)
  }

  // Form Validation
  validateForm = () => {
    const {user_name_valid, emailValid, passwordValid} = this.state
    this.setState({
      formValid: user_name_valid && emailValid && passwordValid
    })
  }

  validateUserName = () => {
    let user_name_valid = true;
    const validationError = {...this.state.validationError}
    const {user_name} = this.state

    if (user_name.startsWith(' ') || user_name.endsWith(' ')) {
      user_name_valid = false
      validationError.user_name = 'Sorry, your username cannot begin or end with a space.'
    } else if (user_name.length < 3 || user_name.length > 30) {
      user_name_valid = false
      validationError.user_name = 'Sorry, your username must be between 3 and 30 characters.'
    }
    this.setState({user_name_valid, validationError}, this.validateForm)
  }

  validateUserEmail = () => {
    let emailValid = true
    const validationError = {...this.state.validationError}
    const {email} = this.state

    if (email.startsWith(' ') || email.endsWith(' ')) {
      emailValid = false
      validationError.email = 'Sorry, your email cannot begin or end with a space'
    } else if (!email.length) {
      emailValid = false
      validationError.email = 'Enter an email.'
    } else if (!/\S+@\S+/.test(email)) {
      emailValid = false
      validationError.email = 'Enter a valid email.'
    }
    this.setState({emailValid, validationError}, this.validateForm)
  }

  validateUserPassword = () => {
    let passwordValid = true
    const validationError = {...this.state.validationError}
    const {password} = this.state

    if (password.startsWith(' ') || password.endsWith(' ')) {
      passwordValid = false
      validationError.password = 'Sorry, your password cannot begin or end with a space.'
    } else if (password.length < 6 || password.length > 30) {
      passwordValid = false
      validationError.password = 'Sorry, your password must be between 6 and 30 characters.'
    }
    this.setState({passwordValid, validationError}, this.validateForm)
  } 

  render() {
    const { validationError, user_name, user_name_valid, email, emailValid, password, passwordValid, error, formValid} = this.state
    const { setPage } = this.context;

    return (
      <Page name="register">
          <div className="modal-container" id="modal">
              <div className="modal">

                <button className="close-btn-register" id="close" onClick={() => setPage('settings')}>
                  <i className="fa fa-times"></i>
                </button>

                <div className="modal-header">
                  <h3>Register</h3>
                  <p className="register-head">Already have an account?<Link to='/' className="nav-link-form" onClick={() => setPage('login')}>Log in</Link></p>
                </div>

                <div className="modal-content">
                    <form className='js-registration-form' action='#' onSubmit={this.handleSubmit}>
                    <div className='error-msg'>{error ? <img id="error-img" src={ErrorImage} alt="error" /> : null}{error}</div>

                    <div className='form-group-register'>
                      <label htmlFor='user_name'>Username</label>
                      <input type='text' className="input-value" id='user_name' name='user_name' placeholder='Enter username here.' value={user_name} onChange={this.handleChange} autoComplete="off" onBlur={this.validateUserName} />
                      <Validator isValid={user_name_valid} msg={validationError.user_name} />
                    </div>

                    <div className='form-group-register'>
                      <label htmlFor='email'>Email</label>
                      <input type='text' id='email' name='email' value={email} placeholder='Enter email here.' onChange={this.handleChange} onBlur={this.validateUserEmail}  autoComplete="off"/>
                      <Validator isValid={emailValid} msg={validationError.email} />
                    </div>

                    <div className='form-group-register'>
                      <label htmlFor='password'>Password</label>
                      <input type='password' id='password' name='password' value={password} placeholder='Enter password here.' onChange={this.handleChange} autoComplete="off"/>
                      <Validator isValid={passwordValid} msg={validationError.password} />
                    </div>

                    <div className='form-controls'>
                      <button disabled={!formValid} type='submit' className='button full outline'>Create Account</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </Page>
    )
  }
};

export default Register;
