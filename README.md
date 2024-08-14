# POLYGON_MODULE_1

### Building with Polygon Bridge
# Project
- For this project, I will deploy an NFT collection on the Ethereum blockchain
- Map the collection to Polygon
- Transfer assets over via the Polygon Bridge.

## Dependencies
- Generate a 5-item collection using Lexica
- Store items on IPFS using pinata.cloud
- Deploy an ERC721 or ERC1155 to the Goerli Ethereum Testnet
- You should have a promptDescription function on the contract that returns the prompt you used to generate the images
- Map Your NFT Collection using Polygon network token mapper. Note: this isn’t necessary but helpful for visualization.
- Write a hardhat script to batch mint all NFTs. Hint: ERC721A is optimal here.
- Write a hardhat script to batch transfer all NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge
- Approve the NFTs to be transferred
- Deposit the NFTs to the Bridge
- Test balanceOf on Mumbai

### Contract deployement and Program Execution
1. clone the repository :
 ```sh
git clone https://github.com/ShivamGMeta/Metacrafter_polygonAdvanceMOd1.git
 ```
2. Run following commands after changeing directory
```sh
npm i
 ```
3. Add your environment variables in `.env` file.
  
4. This will generate a contract address that will get written in contractAddress.js in metadata folder. Paste that address into `batchMint.js` and also in `approveDeposit.js`
``` shell
npx hardhat run scripts/deploy.js --network sepolia 
```

5. This will batch Mint all the nfts stored in pinata cloud
``` shell
npx hardhat run scripts/batchMint.js --network sepolia
```
### Approve and Deposite all the minted NFT's  from SEPOLIA to AMOY
6.
```shell
npx hardhat run scripts/approvedDeposit.js --network goerli
```

Running this will first approve the transfer to FxPortal bridge and then will transfer to Polygon AMOY 
Finaly all the NFT's will be transfered from Ethereum to Polygon Network usiing fxPortal Bridge.

##### After 20-30 min run this command to check the amoy balance 
7. Display Amoy chain balance
```shell
npx hardhat run scripts/balanceamoy.js --network amoy
```

And Balance in Sepolia will become 0 and in Polygon Amoy 5 NFT's
![image](https://github.com/user-attachments/assets/8f7eff85-6ab1-4c6c-969b-ffa059fea473)



# Visualization and Links
![image](https://github.com/user-attachments/assets/3bdb29fc-327d-4257-b45b-3921efd977be)
![image](https://github.com/user-attachments/assets/3abccc3c-ad78-4187-9883-ae855fe40daf)



https://sepolia.etherscan.io/address/0x9093F40AeDc4094A0131866583f8B4b778F32271
https://amoy.polygonscan.com/address/0x34194173536f556BcC74075aceDC1DeF287A9C80#nfttransfers
