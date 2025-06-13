import React from 'react';
import HistoryItem from './HistoryItem';

interface HistoryEntry {
    address: string;
    result: 'win' | 'lose';
    amount: string;
}

interface GameHistoryProps {
    history: HistoryEntry[];
}

const GameHistory: React.FC<GameHistoryProps> = ({ history }) => {
    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Game History</h2>
            {history.length === 0 && <p>No game history yet.</p>}
            {history.map((entry, index) => (
                <HistoryItem
                    key={index}
                    address={entry.address}
                    result={entry.result}
                    amount={entry.amount}
                />
            ))}
        </div>
    );
};

export default GameHistory;
