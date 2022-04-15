const localAPI = 'http://localhost:8000';
const prodAPI = 'https://tralio-api.herokuapp.com';

module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    
  },
  publicRuntimeConfig: {
    API_URL: localAPI,
    apiVersion: 'v1',
  },
}
