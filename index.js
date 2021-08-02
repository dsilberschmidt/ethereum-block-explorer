import "./index.scss";
const axios = require('axios');

const PROJECT_SECRET = "c80e9af2a2b8410fbc2f4d8b99e183a8"; // <-- insert your Project Secret
const INFURA_ENDPOINT = "https://mainnet.infura.io/v3/597b5fe25a724b9f89022130526c213a"; // <-- insert your Infura Endpoint
let respuesta;
axios.post(INFURA_ENDPOINT, {
  jsonrpc: "2.0",
  id: 1,
  method: "eth_getBlockByNumber",
  params: [
    block,
    true  // retrieve the full transaction object in transactions array
  ]
}, {
  auth: {
    password: PROJECT_SECRET,
  }
}).then((response) => {
  console.log(response.data.result);
  respuesta = response.data.resutl;

});
