const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require("./compile.js");

const provider = new HDWalletProvider(
  'acid provide crucial hidden blush quote network heart rug all employ supply',
  'rinkeby.infura.io/v3/7c130744e7b346a3bc94ed16afd48e23'
);

let accounts;

const web3 = new Web3(provider);
console.log(web3);
const deploy = async ()=>{
  accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from accounts', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
  console.log(result);
    // .deploy({ data : '0x' + bytecode, arguments : ['Hiii'] })
    // .send({gas : '1000000', from : accounts[0]});

  console.log('Contract deployed to : ', result.options.address);
};

deploy();
