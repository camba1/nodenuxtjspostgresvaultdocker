var options = {
  apiVersion: 'v1', // default
  endpoint: process.env.VEP, // default
  token: process.env.VT
};


// get new instance of the client
const vault = require("node-vault")(options);
const path = process.env.VP;
const db = process.env.VD;
const host = process.env.VH;
const port = process.env.VPT;

const getConnectDetails =  () => {
  return vault.read(path)
          .then((result) => {
            const resultObj = result.data
            // const uName = resultObj.username;
            // const uPwd = resultObj.password;
            // console.log(uName + ': ' + uPwd);
            resultObj.db = db;
            resultObj.host = host;
            resultObj.port = port;
            return resultObj;
            }
          ).catch(console.error);
}

module.exports = { getConnectDetails }
