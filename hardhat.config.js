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
    neonlabs: {
      url: "https://devnet.neonevm.org",
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
      network_id: "Neon EVM Devnet",
      chainId: 245022926,
      allowUnlimitedContractSize: false,
      timeout: 1000000,
      isFork: true,
      //gasPrice: 35000000000,
      saveDeployments: true,
    },

  }
};
