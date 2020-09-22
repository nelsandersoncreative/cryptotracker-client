let apiPath;
let tokenKey;

if (process.env.NODE_ENV === 'production') {
  apiPath = 'https://cryptotracker-api.herokuapp.com/api'
  tokenKey = 'cryptotracker-prod-auth-token'
} else {
  apiPath = 'http://localhost:9000/api'
  tokenKey = 'cryptotracker-auth-token'
}

export default {
  API_ENDPOINT: apiPath,
  TOKEN_KEY: tokenKey,
}