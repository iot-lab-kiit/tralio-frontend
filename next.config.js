const localAPI = 'http://localhost:3000';
const prodAPI = 'https://tralio-api.herokuapp.com';

module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    
  },
  publicRuntimeConfig: {
    API_URL: prodAPI,
    apiVersion: 'v1',
  },
}
