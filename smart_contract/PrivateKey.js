const { Wallet } = require("ethers");

const wallet = Wallet.createRandom();
console.log("Private Key:", wallet.privateKey);
console.log("Address:", wallet.address);
