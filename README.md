# Solidity_Smart_Contract_Using_ether.js

We generally use web3.js for etherum and blockchain stuff. But web3@1.0.0-beta.27 is not installing in linux(Ubuntu 18.04) and this code is not working with latest version of web3 ie. web3.1.0.0@-beta.55 so I have to use ethers.js for this.
This code is working fine with ethers.js

Steps:
Clone the repo.
Enter the repo.
npm install
run:- ganache-cli, and keep terminal open.
Open another terminal in same directory.
Go to editor and open inbox.test.js file in test folder
Open ganache-cli terminal, go to bottom and there you find port number just copy port number, go to file in editor and paste your port number in 2nd line of code.
Similarly pick one private key from ganache-cli and paste it in place of private key in same code.
That's all, come to another open terminal and just run : npm run test and wait for a min. and your first contract deployed, you can also view it in ganace-cli.
