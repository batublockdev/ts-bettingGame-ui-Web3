"use client"
import React from 'react';
import GameHistory from './ui/GameHistory';
import { useState, useEffect } from 'react';
import { chainToAddress, ContractAbi } from '../constants';
import { useWatchContractEvent, useChainId, useConfig } from 'wagmi';
import { watchContractEvent } from '@wagmi/core'
import { formatEther } from 'ethers';



const Sidebar: React.FC = () => {
    const chainId = useChainId();
    const config = useConfig();
    const addressContract = chainToAddress[chainId]['address'] as `0x${string}`;
    const [betAmount, setBetAmount] = useState<number | string>('');
    const [history, setHistory] = useState<{ address: string; result: "win" | "lose"; amount: string }[]>([
        { address: '0x123...abc', result: 'win', amount: '0.5' },
        { address: '0x456...def', result: 'lose', amount: '1.0' },
    ]);


    useWatchContractEvent({
        address: addressContract,
        abi: ContractAbi,
        eventName: 'BetHistory',
        onLogs(logs) {
            const log = logs[0].topics;

            // Decode values from topics
            const rawAddress = log[1] ? '0x' + log[1].slice(26) : '0x0000000000000000000000000000000000000000'; // Default to zero address if undefined
            const rawResult = log[2] ? BigInt(log[2]) : BigInt(0); // Default to BigInt(0) if undefined
            const rawAmount = log[3] ? BigInt(log[3]) : BigInt(0); // Default to BigInt(0) if undefined

            const formattedEntry = {
                address: `${rawAddress.slice(0, 6)}...${rawAddress.slice(-4)}`,
                result: rawResult === BigInt(0) ? ('win' as const) : ('lose' as const),
                amount: formatEther(rawAmount),
            };

            setHistory((prev) => [...prev, formattedEntry]);
        },
    })
    return (
        <aside className="fixed top-0 right-0 w-80 h-full bg-gray-100 p-4 shadow-lg overflow-y-auto z-50">
            <GameHistory history={history} />
        </aside>
    );
};

export default Sidebar;
