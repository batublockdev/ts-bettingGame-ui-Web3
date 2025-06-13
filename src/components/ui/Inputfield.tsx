"use client"
import React, { useState } from 'react';

interface NumericInputFieldProps {
    label: string;
    placeholder?: string;
    value: number | string;
    onChange: (value: number | string) => void;
    maxValue: number;
}

const NumericInputField: React.FC<NumericInputFieldProps> = ({
    label,
    placeholder,
    value,
    onChange,
    maxValue,
}) => {
    const [isInvalid, setIsInvalid] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        // Allow empty string for controlled input
        if (inputValue === '') {
            setIsInvalid(false);
            onChange('');
            return;
        }

        const numericValue = Number(inputValue);

        if (!isNaN(numericValue)) {
            const invalid = numericValue > maxValue;
            setIsInvalid(invalid);
            onChange(numericValue);
        }
    };

    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <input
                type="number"
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                className={`border rounded-lg px-3 py-2 focus:outline-none transition-all ${isInvalid
                    ? 'border-red-500 ring-2 ring-red-400'
                    : 'border-gray-300 focus:ring-2 focus:ring-blue-500'
                    }`}
            />
            {isInvalid && (
                <p className="text-sm text-red-600">Value must be ≤ {maxValue}</p>
            )}
        </div>
    );
};

export default NumericInputField;
