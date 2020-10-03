import config from '../config';
import TokenService from './TokenService';

// Services for getting user coins from Database
const UserApiService = {
  async getUserCoins(id) {
    const res = await fetch(`${config.API_ENDPOINT}/user-coins/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })

    if (!res.ok) {
      return res.json().then(e => Promise.reject(e))
    }
    return res.json();
  },
};

export default UserApiService;
