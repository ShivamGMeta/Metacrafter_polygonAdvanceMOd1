/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
module.exports = {
  solidity: "0.8.18",
};
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    amoy: {
      url: 'https://polygon-amoy.drpc.org',
      accounts: [process.env.PRIVATE_KEY]
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/7mXFDS2YcwySywIsk9o2lGMODBzxcT5U",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
