import Web3 from "web3";

let pbrConstant;
// Mainnet

pbrConstant = {
  rpcUrl: "https://bsc-dataseed.binance.org/",
  chainId: 1, //Mainet
  contractAddress: "0x60CcE9764F55298cbB54a04E408Cd1CD06061aa0",
  abi: [
    {
      inputs: [
        {
          internalType: "address payable",
          name: "receiveTokenAdd",
          type: "address",
        },
        {
          internalType: "contract IERC20",
          name: "polkaBridge",
          type: "address",
        },
        {
          internalType: "contract PolkaBridgeStaking",
          name: "_polkaBridgeStaking",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      inputs: [
        { internalType: "address", name: "user", type: "address" },
        { internalType: "uint256", name: "pid", type: "uint256" },
      ],
      name: "IsWhitelist",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "pid", type: "uint256" }],
      name: "activePool",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address[]", name: "user", type: "address[]" },
        { internalType: "uint256", name: "pid", type: "uint256" },
      ],
      name: "addMulWhitelist",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "begin", type: "uint256" },
        { internalType: "uint256", name: "end", type: "uint256" },
        { internalType: "uint256", name: "_type", type: "uint256" },
        {
          internalType: "contract IERC20",
          name: "idoToken",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "maxPurchaseTier1",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "maxPurchaseTier2",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "maxPurchaseTier3",
          type: "uint256",
        },
        { internalType: "uint256", name: "totalCap", type: "uint256" },
        { internalType: "uint256", name: "totalToken", type: "uint256" },
        { internalType: "uint256", name: "ratePerETH", type: "uint256" },
        { internalType: "uint256", name: "lockDuration", type: "uint256" },
        {
          internalType: "uint256",
          name: "minimumTokenSoldout",
          type: "uint256",
        },
      ],
      name: "addPool",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "user", type: "address" },
        { internalType: "uint256", name: "pid", type: "uint256" },
      ],
      name: "addWhitelist",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "pid", type: "uint256" }],
      name: "claimToken",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "pid", type: "uint256" }],
      name: "getBalanceTokenByPoolId",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "pid", type: "uint256" }],
      name: "getPoolInfo",
      outputs: [
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "bool", name: "", type: "bool" },
        { internalType: "contract IERC20", name: "", type: "address" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "pid", type: "uint256" }],
      name: "getPoolSoldInfo",
      outputs: [
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "uint256", name: "", type: "uint256" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "pid", type: "uint256" }],
      name: "getRemainIDOToken",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "pid", type: "uint256" },
        { internalType: "address", name: "user", type: "address" },
      ],
      name: "getUserInfo",
      outputs: [
        { internalType: "bool", name: "", type: "bool" },
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "bool", name: "", type: "bool" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "user", type: "address" },
        { internalType: "uint256", name: "poolId", type: "uint256" },
      ],
      name: "getUserStakingData",
      outputs: [
        { internalType: "uint256", name: "amount", type: "uint256" },
        { internalType: "uint256", name: "rewardDebt", type: "uint256" },
        { internalType: "uint256", name: "rewardClaimed", type: "uint256" },
        { internalType: "uint256", name: "lastBlock", type: "uint256" },
        { internalType: "uint256", name: "beginTime", type: "uint256" },
        { internalType: "uint256", name: "endTime", type: "uint256" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "pid", type: "uint256" }],
      name: "getUserTotalPurchase",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "pid", type: "uint256" }],
      name: "getWhitelistfo",
      outputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "bool", name: "", type: "bool" },
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "bool", name: "", type: "bool" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "isOwner",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "pid", type: "uint256" }],
      name: "purchaseIDO",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "pid", type: "uint256" }],
      name: "stopPool",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "pid", type: "uint256" },
        { internalType: "uint256", name: "begin", type: "uint256" },
        { internalType: "uint256", name: "end", type: "uint256" },
        {
          internalType: "uint256",
          name: "maxPurchaseTier1",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "maxPurchaseTier2",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "maxPurchaseTier3",
          type: "uint256",
        },
        { internalType: "uint256", name: "totalCap", type: "uint256" },
        { internalType: "uint256", name: "totalToken", type: "uint256" },
        { internalType: "uint256", name: "ratePerETH", type: "uint256" },
        { internalType: "uint256", name: "lockDuration", type: "uint256" },
        {
          internalType: "contract IERC20",
          name: "idoToken",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "minimumTokenSoldout",
          type: "uint256",
        },
      ],
      name: "updatePool",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "user", type: "address" },
        { internalType: "uint256", name: "pid", type: "uint256" },
        { internalType: "bool", name: "isWhitelist", type: "bool" },
        { internalType: "bool", name: "isActived", type: "bool" },
      ],
      name: "updateWhitelist",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "address", name: "", type: "address" },
      ],
      name: "whitelist",
      outputs: [
        { internalType: "uint256", name: "Id", type: "uint256" },
        { internalType: "address", name: "UserAddress", type: "address" },
        { internalType: "bool", name: "IsWhitelist", type: "bool" },
        {
          internalType: "uint256",
          name: "TotalTokenPurchase",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "TotalETHPurchase",
          type: "uint256",
        },
        { internalType: "uint256", name: "PurchaseTime", type: "uint256" },
        { internalType: "bool", name: "IsActived", type: "bool" },
        { internalType: "bool", name: "IsClaimed", type: "bool" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "contract IERC20", name: "token", type: "address" },
      ],
      name: "withdrawErc20",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "withdrawPoolFund",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
};

var web3 = new Web3(window.ethereum);
var pbrContract = new web3.eth.Contract(
  pbrConstant.abi,
  pbrConstant.contractAddress
);

export default pbrContract;
