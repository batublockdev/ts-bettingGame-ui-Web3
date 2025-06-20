"use client"
import React from 'react';
import GameHistory from './ui/GameHistory';
import { useState, useEffect } from 'react';
import { chainToAddress, ContractAbi } from '../constants';
import { useWatchContractEvent, useChainId, useConfig, useAccount } from 'wagmi';
import { getEthersProvider } from '../Ether-Wagmi';
import { formatEther, ethers, parseEther } from 'ethers';



const Sidebar: React.FC = () => {
    const chainId = useChainId();
    const config = useConfig();
    const addressContract = chainToAddress[chainId]['address'] as `0x${string}`;
    const [betAmount, setBetAmount] = useState<number | string>('');
    const [history, setHistory] = useState<{ address: string; result: "win" | "lose"; amount: string }[]>([
    ]);
    const { address } = useAccount();



    useEffect(() => {


        async function getLatestBetHistoryEvent() {
            const provider = getEthersProvider(config)
            if (!provider) throw new Error('No provider found')

            const contract = new ethers.Contract(addressContract, ContractAbi, provider)

            const filter = contract.filters.BetHistory()
            const latestBlock = await provider.getBlockNumber()

            // Adjust the range if your events are recent — use latestBlock - N to limit performance
            const fromBlock = Math.max(0, latestBlock - 500) // or whatever makes sense for your use case
            const events = await contract.queryFilter(filter, fromBlock, 'latest')
            const length = events.length;
            for (let i = 0; i < length; i++) {
                const event = events[i];
                if (!event) {
                    console.log("No BetHistory events found.")
                    return
                }

                // Access args safely
                if ('args' in event && event.args) {
                    const { player, amount, result } = event.args
                    console.log('Player:', player)
                    console.log('Amount:', amount.toString())
                    console.log('Result:', result.toString())

                    const formattedEntry = {
                        address: `${player.slice(0, 6)}...${player.slice(-4)}`,
                        result: result === BigInt(0) ? ('win' as const) : ('lose' as const),
                        amount: formatEther(amount.toString()),
                    };

                    setHistory((prev) => [...prev, formattedEntry]);
                } else {
                    console.error('No args in last event:', event)
                }
                if (i == 5) {
                    console.log("Stopping after 5 events to avoid performance issues.")
                    break;
                }
            }
        }
        getLatestBetHistoryEvent()




    }, [addressContract, config]);

    useWatchContractEvent({
        address: addressContract,
        abi: ContractAbi,
        args: { player: address },
        eventName: 'BetHistory',
        onLogs(logs) {
            const log = logs[0]
            console.log('BetHistory log:', log);

            // Decode values from topics
            if ('args' in log) {
                if (typeof log.args === 'object' && log.args !== null && 'player' in log.args && 'amount' in log.args && 'result' in log.args) {
                    const rawAddress = log.args.player as string
                    const rawResult = log.args.result as BigInt;//log.args.amount as BigInt
                    const rawAmount = log.args.amount as BigInt; //log.args.result as BigInt;
                    const formattedEntry = {
                        address: `${rawAddress.slice(0, 6)}...${rawAddress.slice(-4)}`,
                        result: rawResult === BigInt(0) ? ('win' as const) : ('lose' as const),
                        amount: formatEther(rawAmount.toString()),
                    };

                    setHistory((prev) => [...prev, formattedEntry]);
                } else {
                    console.error('Logs[0].args does not contain MaxBet:');
                }

            }
        },
    })
    return (
        <aside className="w-80 h-screen bg-gray-100 p-4 shadow-lg overflow-y-auto">
            <GameHistory history={history} />
        </aside>
    );
};

export default Sidebar;
