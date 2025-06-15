"use client"
import NumericInputField from '../components/ui/Inputfield';
import { useState, useEffect } from 'react';
import { chainToAddress, ContractAbi } from '../constants';
import { useWatchContractEvent, useChainId, useConfig } from 'wagmi';
import { watchContractEvent } from '@wagmi/core'
import { formatEther, ethers } from 'ethers';
import { getEthersProvider } from '../Ether-Wagmi';

export default function MainPage() {
    enum Bet_State {
        OPEN,
        CLOSED,
        CALCULATING,
        ONGAME
    }
    const [betAmount, setBetAmount] = useState<number | string>('');
    const [maxBet, setMaxBet] = useState<number>(0);
    const [gameState, setGameState] = useState<number>(Bet_State.OPEN);
    const chainId = useChainId();
    const config = useConfig();
    const addressContract = chainToAddress[chainId]['address'] as `0x${string}`;


    useEffect(() => {
        async function getPastEvents() {
            const provider = getEthersProvider(config)
            if (!provider) throw new Error('No provider found')


            const contract = new ethers.Contract(addressContract, ContractAbi, provider)

            // Optional: define a filter for your event
            const filter = contract.filters.State_Bet() // event name from ABI

            // Fetch past logs from block 0 to latest
            const events = await contract.queryFilter(filter, 0, 'latest')
            const lastEvent = events[events.length - 1];
            if ('args' in lastEvent) {
                const gameId = lastEvent.args[0]
                setGameState(Number(gameId))
                console.log('args:', Number(gameId))

            } else {
                console.error('Event does not have args:', lastEvent)
            }

            // Optional: define a filter for your event
            const filterMax_Bet = contract.filters.Max_Bet() // event name from ABI

            // Fetch past logs from block 0 to latest
            const eventsMax_Bet = await contract.queryFilter(filterMax_Bet, 0, 'latest')
            const lastEventx = eventsMax_Bet[eventsMax_Bet.length - 1];
            if ('args' in lastEventx) {
                const gameIdx = lastEventx.args[0]
                setMaxBet(Number(formatEther((gameIdx))))
                console.log('args:', formatEther((gameIdx)))

            } else {
                console.error('Event does not have args:', lastEvent)
            }


        }
        getPastEvents();
    }, [addressContract, config]);

    useWatchContractEvent({
        address: addressContract,
        abi: ContractAbi,
        eventName: 'State_Bet',
        onLogs(Logs) {
            console.log('old logs!', Logs)
        },
    });

    useWatchContractEvent({
        address: addressContract,
        abi: ContractAbi,
        eventName: 'Max_Bet',
        onLogs(Logs) {
            console.log('old logs!', Logs)
        },
    });

    return (
        <div>
            <main style={{ padding: '2rem', textAlign: 'center' }}>
                {gameState === 1 ? (
                    <>
                        <div className="spinner" /> {/* You can use a real spinner component */}
                        <p>Waiting for the game to start...</p>
                    </>
                ) : gameState === 0 || gameState === 3 ? (
                    <>
                        <h1>Welcome to the Betting Game</h1>
                        <p>Connect your wallet to start playing!</p>
                        <NumericInputField
                            label="Enter your bet amount"
                            placeholder="0.00"
                            value={betAmount}
                            onChange={setBetAmount}
                            maxValue={maxBet}
                        />
                    </>
                ) : gameState === 2 ? (
                    <>
                        <h1>Welcome to the Betting Game</h1>
                        <p>Cox</p>

                    </>
                ) : (
                    <p>No game available right now.</p>
                )}
            </main>
        </div>
    )

}