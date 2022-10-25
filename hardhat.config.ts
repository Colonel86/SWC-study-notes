import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.4.22",
      },
      {
        version: "0.8.17",
        settings: {},
      },
    ],
  },
};

export default config;
