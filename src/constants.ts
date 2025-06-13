interface ContractsConfig {
    [chainId: number]: {
        address: string;
    }
}

export const chainToAddress: ContractsConfig = {
    31337: {
        address: '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9'
    },
    11155111: {
        address: '0x3b7f2d6d5b9c4e2f8b5a1d3e1c5c6f7a8b9c0d1e'
    }
}

export const ContractAbi = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "subscriptionId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "gasLane",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "interval",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "entranceFee",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "callbackGasLimit",
                "type": "uint32",
                "internalType": "uint32"
            },
            {
                "name": "vrfCoordinatorV2",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_Coin",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "OwnerWithdraw",
        "inputs": [
            {
                "name": "amount_toWithdraw",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "acceptOwnership",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "bet",
        "inputs": [
            {
                "name": "bet_player",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_bet_amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "ceoWithdraw",
        "inputs": [
            {
                "name": "amount_toWithdraw",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "checkUpkeep",
        "inputs": [
            {
                "name": "",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [
            {
                "name": "upkeepNeeded",
                "type": "bool",
                "internalType": "bool"
            },
            {
                "name": "",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getBalance",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getBet_State",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getCEO",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getCEOWithdrawalAmount",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getLastTimeStamp",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getMaxtoBet",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getOwnerBalance",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getOwners",
        "inputs": [
            {
                "name": "indexOwners",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getOwners_legth",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getPreviousCard",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "invest",
        "inputs": [],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "owner",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "performUpkeep",
        "inputs": [
            {
                "name": "",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "rawFulfillRandomWords",
        "inputs": [
            {
                "name": "requestId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "randomWords",
                "type": "uint256[]",
                "internalType": "uint256[]"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "s_CEO",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "s_vrfCoordinator",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract IVRFCoordinatorV2Plus"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "setCoordinator",
        "inputs": [
            {
                "name": "_vrfCoordinator",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setMaxBet",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "inputs": [
            {
                "name": "to",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "BetHistory",
        "inputs": [
            {
                "name": "player",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "result",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "amount",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "CoordinatorSet",
        "inputs": [
            {
                "name": "vrfCoordinator",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "CurrentCard",
        "inputs": [
            {
                "name": "card",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Max_Bet",
        "inputs": [
            {
                "name": "MaxBet",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "OwnershipTransferRequested",
        "inputs": [
            {
                "name": "from",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "to",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "name": "from",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "to",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "RequestedRaffleWinner",
        "inputs": [
            {
                "name": "requestId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "State_Bet",
        "inputs": [
            {
                "name": "betState",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "HigherOrLower_BalanceIs0_Or_AddressIsnotValid",
        "inputs": []
    },
    {
        "type": "error",
        "name": "HigherOrLower_GAME_NOT_OPEN",
        "inputs": []
    },
    {
        "type": "error",
        "name": "HigherOrLower_IncorrectBet",
        "inputs": []
    },
    {
        "type": "error",
        "name": "HigherOrLower_IncorrectInvestmentAmount",
        "inputs": []
    },
    {
        "type": "error",
        "name": "HigherOrLower_NotCEO",
        "inputs": []
    },
    {
        "type": "error",
        "name": "HigherOrLower_NotEnoughFundsToBet",
        "inputs": []
    },
    {
        "type": "error",
        "name": "HigherOrLower_NotEnoughFundsToWithdraw",
        "inputs": []
    },
    {
        "type": "error",
        "name": "HigherOrLower_OwnersMaximum_Completed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "HigherOrLower_PlayersMaximum_Completed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "HigherOrLower_TooMuchFundsToBet",
        "inputs": []
    },
    {
        "type": "error",
        "name": "HigherOrLower_TransferFailed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "HigherOrLower_UpkeepNotNeeded",
        "inputs": [
            {
                "name": "bet_State",
                "type": "uint256",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "error",
        "name": "OnlyCoordinatorCanFulfill",
        "inputs": [
            {
                "name": "have",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "want",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "OnlyOwnerOrCoordinator",
        "inputs": [
            {
                "name": "have",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "owner",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "coordinator",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "ZeroAddress",
        "inputs": []
    }
]