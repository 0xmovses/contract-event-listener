const hre = require("hardhat");
const ethers = require('ethers');
const USDT_ABI = require('../abis/USDT_ABI.json')

async function main() {

const usdt = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
const provider = new ethers.providers.WebSocketProvider("wss://eth-mainnet.ws.alchemyapi.io/v2/gRR0KK-rRxTfSUdGd_g11RvpjrgCRN8a");
const contract = new ethers.Contract(usdt, USDT_ABI, provider)

contract.on('Transfer', (from, to, value) => console.log(from, to, value))
 }

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

  