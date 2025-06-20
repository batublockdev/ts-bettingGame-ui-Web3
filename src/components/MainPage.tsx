"use client"
import NumericInputField from '../components/ui/Inputfield';
import { useState, useEffect } from 'react';
import { chainToAddress, ContractAbi } from '../constants';
import { useWatchContractEvent, useChainId, useConfig, useWriteContract } from 'wagmi';
import { watchContractEvent } from '@wagmi/core'
import { formatEther, ethers, parseEther } from 'ethers';
import { getEthersProvider } from '../Ether-Wagmi';
import Header from '@/components/Header';
import Card from "./ui/card"
import BetButtons from './BetButtons';


export default function MainPage() {
    enum Bet_State {
        OPEN,
        CLOSED,
        CALCULATING,
        ONGAME
    }
    const [betAmount, setBetAmount] = useState<number | string>('');
    const [maxBet, setMaxBet] = useState<number>(0);
    const [CurrentNumber, setCurrentNumber] = useState<number>(0);
    const { data: hash, isPending, error, writeContractAsync } = useWriteContract()
    const [gameState, setGameState] = useState<number>(Bet_State.OPEN);
    const chainId = useChainId();
    const config = useConfig();
    const addressContract = chainToAddress[chainId]['address'] as `0x${string}`;
    const provider = getEthersProvider(config)
    if (!provider) throw new Error('No provider found')
    const contract = new ethers.Contract(addressContract, ContractAbi, provider);

    useEffect(() => {

        async function getBet_StateEvent() {
            const provider = getEthersProvider(config)
            if (!provider) throw new Error('No provider found')
            const contract = new ethers.Contract(addressContract, ContractAbi, provider);

            const listOwner = await contract.getOwnersList();
            const state = await contract.getBet_State();
            console.log('State:', state);
            setGameState(Number(state))


        }
        getBet_StateEvent();

        async function getPreviousCardEvent() {

            const card = await contract.getPreviousCard();
            console.log('card:', card);
            setCurrentNumber(Number(card));

        }
        getPreviousCardEvent();
        async function getCurrentMaxBet() {
            const MaxBet = await contract.getMaxtoBet();
            console.log('Maxbet:', MaxBet);
            setMaxBet(Number(formatEther((MaxBet))))

        }
        getCurrentMaxBet();


    }, [addressContract, config]);

    useWatchContractEvent({
        address: addressContract,
        abi: ContractAbi,
        eventName: 'State_Bet',
        onLogs(Logs) {
            console.log('old logs!', Logs)
            if ('args' in Logs[0]) {
                if (typeof Logs[0].args === 'object' && Logs[0].args !== null && 'betState' in Logs[0].args) {
                    const GameState = Logs[0].args.betState as BigInt;
                    setGameState(Number(GameState));
                    console.log('args:', Number(GameState));
                } else {
                    console.error('Logs[0].args does not contain betState:', Logs[0].args);
                }

            }
        },
    });
    useWatchContractEvent({
        address: addressContract,
        abi: ContractAbi,
        eventName: 'CurrentCard',
        onLogs(Logs) {
            console.log('old logs!', Logs)
            if ('args' in Logs[0]) {
                if (typeof Logs[0].args === 'object' && Logs[0].args !== null && 'card' in Logs[0].args) {
                    const card = Logs[0].args.card as BigInt;
                    setCurrentNumber(Number(card));
                    console.log('args:', Number(card))
                } else {
                    console.error('Logs[0].args does not contain MaxBet:', Logs[0].args);
                }

            }
        },
    });
    useWatchContractEvent({
        address: addressContract,
        abi: ContractAbi,
        eventName: 'Max_Bet',
        onLogs(Logs) {
            console.log('old logs!', Logs)
            if ('args' in Logs[0]) {
                if (typeof Logs[0].args === 'object' && Logs[0].args !== null && 'MaxBet' in Logs[0].args) {
                    const MaxBet = Logs[0].args.MaxBet as BigInt;
                    setMaxBet(Number(formatEther(Number(MaxBet))))
                    console.log('args:', formatEther(Number(MaxBet)))
                } else {
                    console.error('Logs[0].args does not contain MaxBet:', Logs[0].args);
                }

            }
        },
    });
    const handleBet = async (choice: number) => {
        console.log(`User bet: ${choice} (current number: ${parseEther(betAmount.toString())})`);
        await writeContractAsync({
            abi: ContractAbi,
            address: addressContract,
            functionName: "bet",
            args: [
                choice,
                parseEther(betAmount.toString()),
            ],
        })
    };
    return (
        <div className="flex-1">
            <Header />

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
                        <Card value={CurrentNumber} />
                        <NumericInputField
                            label="Enter your bet amount"
                            placeholder="0.00"
                            value={betAmount}
                            onChange={setBetAmount}
                            maxValue={maxBet}
                        />

                        <BetButtons handleBet={handleBet} />

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