require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-mainnet.g.alchemy.com/v2/5Cry_iwNu_srok1gmUyK-h06Omy5izcx", // Replace with your Alchemy API key for Sepolia
      accounts: [
        `0x8e8ed5d683e020ba2cd61d8f19012253274f2d1fcdf1002d634ce7de7261874d`,
      ], // Replace with your wallet's private key
    },
  },
};
