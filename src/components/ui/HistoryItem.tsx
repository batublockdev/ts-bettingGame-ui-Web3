import React from 'react';

interface HistoryItemProps {
    address: string;
    result: 'win' | 'lose';
    amount: string;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ address, result, amount }) => {
    return (
        <div className={`p-2 rounded-md mb-2 text-sm ${result === 'win' ? 'bg-green-100' : 'bg-red-100'}`}>
            <div><strong>Address:</strong> {address}</div>
            <div><strong>Result:</strong> {result}</div>
            <div><strong>Amount:</strong> {amount} ETH</div>
        </div>
    );
};

export default HistoryItem;
