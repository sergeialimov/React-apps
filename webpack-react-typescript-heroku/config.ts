export const hostName = (process.env.NODE_ENV === 'development')
  ? 'http://localhost:8090/'
  : 'https://tracker-fcc.herokuapp.com/';