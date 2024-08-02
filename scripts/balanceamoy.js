const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/BirdOfParadise.sol/BirdOfParadise.json");

const tokenAddress = "0x5D8F5D12697C46082EC1f4b7eA5A02d481A39299";  // still has to change 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x34194173536f556BcC74075aceDC1DeF287A9C80";

async function main() {
  try {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const balance = await token.balanceOf(walletAddress);
    console.log(`You now have: ${balance} NFTs in your wallet`);
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
}

main();