"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@nomicfoundation/hardhat-toolbox");
const config = {
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
exports.default = config;
