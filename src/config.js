let apiPath;
let tokenKey;

if (process.env.NODE_ENV === 'production') {
  apiPath = 'https://cryptotracker-server.herokuapp.com/api'
  tokenKey = process.env.REACT_APP_API_KEY
} else {
  apiPath = 'http://localhost:9000/api'
  tokenKey = 'cryptotracker-auth-token'
}

export default {
  API_ENDPOINT: apiPath,
  TOKEN_KEY: tokenKey,
}