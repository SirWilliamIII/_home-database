// Update with your config settings.
const dotenv = require('dotenv');

dotenv.config();


module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/athome'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
