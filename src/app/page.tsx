"use client"
import NumericInputField from '../components/ui/Inputfield';
import { useState, useEffect } from 'react';
import { chainToAddress, ContractAbi } from '../constants';
import { useWatchContractEvent, useChainId, useConfig } from 'wagmi';
import { watchContractEvent } from '@wagmi/core'
import { formatEther } from 'ethers';
import Sidebar from '@/components/Sidebar';



export default function Home() {

  const [betAmount, setBetAmount] = useState<number | string>('');
  const [maxBet, setMaxtBet] = useState<number>(0);
  const chainId = useChainId();
  const config = useConfig();
  const addressContract = chainToAddress[chainId]['address'] as `0x${string}`;


  const unwatch_State_Bet = watchContractEvent(config, {
    address: addressContract,
    abi: ContractAbi,
    eventName: 'State_Bet',
    onLogs(prevLogs) {
      console.log('old logs!', prevLogs)
    },
  })
  unwatch_State_Bet()

  const unwatch_Max_Bet = watchContractEvent(config, {
    address: addressContract,
    abi: ContractAbi,
    eventName: 'Max_Bet',
    onLogs(prevLogs) {
      console.log('old logs!', prevLogs)
    },
  })
  unwatch_Max_Bet()

  const unwatch_CurrentCard = watchContractEvent(config, {
    address: addressContract,
    abi: ContractAbi,
    eventName: 'CurrentCard',
    onLogs(prevLogs) {
      console.log('old logs!', prevLogs)
    },
  })
  unwatch_CurrentCard()

  useWatchContractEvent({
    address: addressContract,
    abi: ContractAbi,
    eventName: 'Max_Bet',
    onLogs(Logs) {
      console.log('old logs!', Logs)
    },

  })
  useWatchContractEvent({
    address: addressContract,
    abi: ContractAbi,
    eventName: 'BetHistory',
    onLogs(Logs) {
      console.log('old logs!', Logs)
    },
  })
  useWatchContractEvent({
    address: addressContract,
    abi: ContractAbi,
    eventName: 'CurrentCard',
    onLogs(Logs) {
      console.log('old logs!', Logs)
    },
  })
  useWatchContractEvent({
    address: addressContract,
    abi: ContractAbi,
    eventName: 'State_Bet',
    onLogs(Logs) {
      console.log('old logs!', Logs)
    },
  })


  return (
    <div>
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <Sidebar />

        <h1>Welcome to the Betting Game</h1>
        <p>Connect your wallet to start playing!</p>
        <NumericInputField
          label="Enter your bet amount"
          placeholder="0.00 ether"
          value={betAmount}
          onChange={setBetAmount}
          maxValue={maxBet}
        />
      </main>
      <footer style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8f9fa' }}>
        <p>&copy; 2023 Betting Game. All rights reserved.</p>
      </footer>
    </div>
  );
}
