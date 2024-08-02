const { ethers } = require("hardhat");
const FXRootContractAbi = require("/workspace/Polyadvance-mod1-metacrafters/FXRootContractAbi.json");
const ABI = require("../artifacts/contracts/BirdOfParadise.sol/BirdOfParadise.json");
require("dotenv").config();

async function main() {
  const networkAddress =
    "https://eth-sepolia.g.alchemy.com/v2/7mXFDS2YcwySywIsk9o2lGMODBzxcT5U";
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  const wallet = new ethers.Wallet(privateKey, provider);

  
  const [signer] = await ethers.getSigners();

  
  const NFT = await ethers.getContractFactory("BirdOfParadise");
  const ethNFTAddress = await NFT.attach("0x9093F40AeDc4094A0131866583f8B4b778F32271"); // ye change hoga as per contract address

  
  const fxRootAddress = "0x9E688939Cb5d484e401933D850207D6750852053";
  const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

  
  const tokenIds = [0, 1, 2, 3, 4];



  // changed from here
  for (let i = 0; i < tokenIds.length; i++) {
    const tokenId = tokenIds[i];
    
    const approveTx = await ethNFTAddress.connect(signer).approve(fxRootAddress, tokenId);
    await approveTx.wait();
    console.log(`NFT with Token ID ${tokenId} approved for transfer`);
  }

  for (let i = 0; i < tokenIds.length; i++) {
    const tokenId = tokenIds[i];
    const depositTx = await fxRoot.connect(signer).deposit(ethNFTAddress.address, wallet.address, tokenId, "0x6566");
    await depositTx.wait();
    // console.log(`NFT with Token ID ${tokenId} transferred and deposited to Mumbai address);
  }

  console.log("NFT : Bird Of paradise");
  console.log("Approved and deposited");

  
  console.log("NFT balance on Polygon Network ")
  const Etherbalance = await ethNFTAddress.balanceOf(wallet.address);
  console.log(" NFT's Holding in wallet:",wallet.address.toString());


}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });