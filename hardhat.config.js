require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.20",
  networks: {
    testnet: {
      url: "https://data-seed-prebsc-1-s3.binance.org:8545/",
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
      //gasPrice: 35000000000,
      saveDeployments: true,
    },
    mainnet: {
      url: "https://bsc-dataseed1.binance.org/",
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
      gasPrice: 35000000000,
      saveDeployments: true,
    },
  }
};