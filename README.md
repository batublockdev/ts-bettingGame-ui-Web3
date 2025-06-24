
# 🎲 Decentralized Betting Game

A fully on-chain betting dApp that uses **Chainlink VRF** for randomness, **Ethers.js** for smart contract interaction, and **Next.js** for the frontend. Users can place bets, view results in real time, and trust the outcome thanks to verifiable randomness.


 **See the contract**: [GITHUB](https://github.com/batublockdev/Chainlink-Betting-Game-v2)  
 **Live App**: [https://ts-betting-game-ui-web3.vercel.app](https://ts-betting-game-ui-web3.vercel.app/)  
 **Demo Video**: [Watch on YouTube](https://youtu.be/irOV2GThzA4) <!-- Replace with your actual video link -->
---

## 🚀 Features

- 🧠 **Smart Contracts** built with Foundry (Solidity)
- 🎲 **Provably fair bets** using Chainlink VRF
- 🔄 **Real-time UI updates** with Ethers.js + Wagmi
- 🦊 Wallet integration via Metamask & WalletConnect (RainbowKit)
- 🧾 Event history and transparent on-chain gameplay

---

## 🏗️ Tech Stack

- **Frontend**: Next.js, React, TailwindCSS, TypeScript
- **Web3**: Ethers.js, Wagmi, RainbowKit
- **Contracts**: Solidity, Foundry
- **Randomness**: Chainlink VRF
- **Testnet**: Sepolia

---

## 📦 Smart Contracts

| Contract         | Description                        | Address     |
|------------------|------------------------------------|-------------|
| `BettingGame.sol` | Main contract for placing and resolving bets | `0x0DfD5C56F7e4fA2f8aE480edAecbBfD5096B212d` |

Source code: [`/contracts`](https://github.com/batublockdev/Chainlink-Betting-Game-v2)  
Deployed with: [Sepolia](https://sepolia.etherscan.io/address/0x0dfd5c56f7e4fa2f8ae480edaecbbfd5096b212d)

---

## 🧪 How to Run Locally

### 1. Clone the Repo
```bash
git clone https://github.com/yourusername/chainlink-betting-game.git
cd chainlink-betting-game
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Env Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id
NEXT_PUBLIC_CONTRACT_ADDRESS=0xYourContractAddress
NEXT_PUBLIC_CHAIN_ID=11155111
```

### 4. Run the App
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 🧠 Gameplay Logic

1. User places a bet by selecting a number.
2. Smart contract stores the bet and requests randomness via Chainlink VRF.
3. Chainlink returns the random number and settles the bet.
4. Result is emitted and shown in real time on the frontend.

---

## 📸 Screenshots

_Add images or GIFs here of your dApp in action._

---

## 🔐 Security

- Chainlink VRF for verifiable randomness
- Smart contracts tested using Foundry and Anvil
- Frontend uses Ethers.js event listeners to reduce trust on backend

---

## 📄 License

MIT
