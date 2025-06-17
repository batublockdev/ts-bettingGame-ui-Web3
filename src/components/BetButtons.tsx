import React from 'react';

const BetButtons = ({ handleBet }: { handleBet: (choice: number) => void }) => {


    return (
        <div className="flex flex-col items-center p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">
                What's your bet for the next number?
            </h2>

            <div className="flex gap-4">
                <button
                    onClick={() => handleBet(2)}
                    className="px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
                >
                    Higher
                </button>
                <button
                    onClick={() => handleBet(1)}
                    className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition"
                >
                    Equal
                </button>
                <button
                    onClick={() => handleBet(0)}
                    className="px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
                >
                    Lower
                </button>
            </div>
        </div>
    );
};

export default BetButtons;
