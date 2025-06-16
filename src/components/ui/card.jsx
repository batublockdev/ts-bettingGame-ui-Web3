"use client"
import React from 'react';

const Card = ({ value }) => {
    return (
        <div className="flex flex-col items-center justify-center p-6">
            <div className="text-6xl font-bold text-blue-600">{value}</div>

            <div className="text-lg text-gray-500 mt-2"> Current number</div>

        </div>
    );
};

export default Card;
