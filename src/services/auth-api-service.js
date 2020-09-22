import config from '../config';
// import TokenService from './TokenService';

const AuthApiService = {
  async login(user_email, user_password){
    const loginData = {user_email, user_password};
    const res = await fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })

    if (!res.ok) {
      return res.json().then(e => Promise.reject(e))
    }

    let result = await res.json();
    return result;
  },

  async createUser(userData){
    const res = await fetch(`${config.API_ENDPOINT}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })

    if (!res.ok) {
      return res.json().then(e => Promise.reject(e))
    }
    return res.json();
  },

  // async getCurrentUser() {
  //   const res = await fetch(`${config.API_ENDPOINT}/user-coins/`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${TokenService.getAuthToken()}`
  //     }
  //   })

  //   if (!res.ok) {
  //     return res.json().then(e => Promise.reject(e))
  //   }

  //   return res.json();
  // }
}

export default AuthApiService;