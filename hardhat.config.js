require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["wget https://raw.githubusercontent.com/dxzenith/Swisstronic-Script/main/simple-contract.sh && chmod +x simple-contract.sh && ./simple-contract.sh"],
    },
  },
};
