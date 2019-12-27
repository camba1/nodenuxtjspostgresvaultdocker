// const Pool = require('pg').Pool
// const vaultData = require('./vaultData');
// const creds = vaultData.getConnectDetails();
// const pool = new Pool({
//   //user: creds.username,
//   user: 'postgres',
//   host: 'myPostgresDB',
//   //database: creds.password,
//   database: 'postgres',
//   password: 'TestDB@home2',
//   port: '5432'
// })

var dbConnect = require('./dbConnect');


const getPostgresData = async (request, response) => {
  const pool = await dbConnect.connect();
  pool.query('SELECT * FROM test ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = { getPostgresData }
