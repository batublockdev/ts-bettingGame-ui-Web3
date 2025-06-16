import React from 'react'

type InvestorsAsideProps = {
    addresses: string[]

}

const InvestorsAside: React.FC<InvestorsAsideProps> = ({ addresses }) => {

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
                    <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                        Invest
                    </button>
                </div>
            </aside>


        </div>
    )
}

export default InvestorsAside
