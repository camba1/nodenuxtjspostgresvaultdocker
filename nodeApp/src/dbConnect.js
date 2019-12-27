const Pool = require('pg').Pool
const vaultData = require('./vaultData');

var pool = null;

var connect = async() => {
  if (pool == null) {
    console.log('New Connection');
    const creds =  await vaultData.getConnectDetails();
      if (creds) {
        return pool = new Pool({
                      user: creds.username,
                      host: creds.host,
                      database: creds.db,
                      password: creds.password,
                      port: creds.port
                    })
        }

  } else {
    console.log('Existing Connection');
    return pool;
  }
}


module.exports = { connect }
