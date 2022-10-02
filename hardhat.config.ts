import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import dotenv from 'dotenv'
dotenv.config()

const privateKey = process.env.privateKey
const alchemyUrl = process.env.alchemyUrl

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork: 'goerli',
  networks: {
    hardhat: {},
    goerli: {
      url: alchemyUrl,
      accounts: [`0x${privateKey}`],
      gas: 2100000,
      gasPrice: 8000000000
   }
  }
};

export default config;
