const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const privateKey = process.env.PRIVATE_KEY;

  const networkAddress =
    "https://eth-sepolia.g.alchemy.com/v2/7mXFDS2YcwySywIsk9o2lGMODBzxcT5U";

  const provider = new ethers.providers.JsonRpcProvider(networkAddress);
  const signer = new ethers.Wallet(privateKey, provider);

  const contractAddress = "0x9093F40AeDc4094A0131866583f8B4b778F32271";

   
  const BirdOfParadise = await ethers.getContractFactory("BirdOfParadise", signer);
  const contract = await BirdOfParadise.attach(contractAddress);

  const numberOfTokensToMint = 5;

  await contract.mint(numberOfTokensToMint);

  
  console.log("Minted 5 Love bird's NFT's");
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
