import React from 'react'
import { useState, useEffect } from 'react';
import { chainToAddress, ContractAbi } from '../../constants';
import { useWatchContractEvent, useChainId, useConfig, useWriteContract } from 'wagmi';
import { formatEther, ethers, parseEther } from 'ethers';
import { getEthersProvider } from '../../Ether-Wagmi';






const InvestorsAside: React.FC = () => {
    const chainId = useChainId();
    const config = useConfig();
    const addressContract = chainToAddress[chainId]['address'] as `0x${string}`;
    const { data: hash, isPending, error, writeContractAsync } = useWriteContract();
    const [addresses, setAddresses] = useState<string[]>([]);

    useEffect(() => {
        async function getPastEvents() {
            const provider = getEthersProvider(config)
            if (!provider) throw new Error('No provider found')


            const contract = new ethers.Contract(addressContract, ContractAbi, provider);

            const listOwner = await contract.getOwnersList();
            console.log('listOwner:', listOwner);
            setAddresses(listOwner.map((address: string) => `${address.slice(0, 6)}...${address.slice(-4)}`));

        }
        getPastEvents();

    }, [addressContract, config]);
    useWatchContractEvent({
        address: addressContract,
        abi: ContractAbi,
        eventName: 'NewOwner',
        onLogs(Logs) {
            console.log('old NewOwner!', Logs)
            if ('args' in Logs[0]) {
                if (typeof Logs[0].args === 'object' && Logs[0].args !== null && 'owner' in Logs[0].args) {
                    const owner: string[] = [];
                    owner.push(Logs[0].args.owner as string);
                    console.log('New owner:', owner[0]);
                    setAddresses((prev) => [...prev, owner[0]]);
                } else {
                    console.error('Logs[0].args does not contain MaxBet:', Logs[0].args);
                }

            }
        },
    });

    const handleBetx = async () => {
        await writeContractAsync({
            abi: ContractAbi,
            address: addressContract,
            functionName: "invest",
        })
    };

    //NewOwner owner getOwnersList
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-80 bg-gray-100 flex flex-col">
                <div className="flex-grow overflow-y-auto p-4">
                    <h2 className="text-xl font-bold mb-4">Investors</h2>
                    <ul className="space-y-2">
                        {addresses.map((address, index) => (
                            <li key={index} className="bg-white p-2 rounded shadow text-sm truncate">
                                {address}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Button pinned at bottom */}
                <div className="p-4 border-t">
                    <button onClick={() => handleBetx()} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                        Invest
                    </button>
                </div>
            </aside>


        </div>
    )
}

export default InvestorsAside
