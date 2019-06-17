const { ContractFactory, Wallet, providers } = require('ethers');
const provider = new providers.JsonRpcProvider('http://localhost:8545');
// provider.listAccounts().then(result => console.log(result))
privateKey = "0xdecbfafaac4010a61073482e6f543404eac30293d7e9701c8c7c0386f25f39b4";
const {interface , bytecode} = require("../compile.js");
const wallet = new Wallet(privateKey, provider);
// console.log(wallet);
async function deployContracts() {
    let token = new ContractFactory(interface, bytecode, wallet)
    // this deploys the contract
    token = await token.deploy("Hello World")
    console.log(token.address);
    // we must wait until it is mined
    await token.deployed().then(function(response){
        response.getMessage().then(function(response1){
          console.log(response1);
        })
    })
}

deployContracts();
// console.log(token);
