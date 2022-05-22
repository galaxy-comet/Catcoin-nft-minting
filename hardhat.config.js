require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('hardhat-deploy');
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log("hardhat task " + account.address);
    }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    networks: {
        localhost: {
            url: "http://127.0.0.1:8545"
        },

        eth: {
            url: "https://mainnet.infura.io/v3/5c9cebeb072b4640819e6397e75a3e3e",
            accounts: [process.env.DEPLOYKEY]
        },
        ropsten: {
            url: "https://ropsten.infura.io/v3/5c9cebeb072b4640819e6397e75a3e3e",
            accounts: [process.env.DEPLOYKEY]
        },
        // https://rinkeby.infura.io/v3/${INFURA_API_KEY}

        rinkeby: {
            url: "https://rinkeby.infura.io/v3/5c9cebeb072b4640819e6397e75a3e3e",
            accounts: [process.env.DEPLOYKEY]
        },

        bsc: {
            url: "http://185.64.106.129/api/rpc/bsc",
            accounts: [process.env.DEPLOYKEY]
        },

        bsctest: {
            url: "http://185.64.106.129/api/rpc/bsctest",
            accounts: [process.env.DEPLOYKEY]
        },

        ftm: {
            url: "https://rpc.ftm.tools/",
            accounts: [process.env.DEPLOYKEY]
        },

        ftmtest: {
            url: "https://rpc.testnet.fantom.network",
            accounts: [process.env.DEPLOYKEY]
        }
    },
    etherscan: {
        // Your API key for Etherscan
        // Obtain one at https://etherscan.io/
        apiKey: ""
    },
    solidity: {
        compilers: [
            {
                version: "0.6.12",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                }
            },
            {
                version: "0.4.17",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                }
            },
            {
                version: "0.5.16",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                }
            },
            {
                version: "0.8.4",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                }
            },
            {
                version: "0.7.6",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                }
            },
        ]
    },
    mocha: {
        timeout: 20000
    }
};
