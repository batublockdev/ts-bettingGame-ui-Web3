import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Header() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 2rem',
            backgroundColor: '#f8f9fa',
            borderBottom: '1px solid #e0e0e0',
            width: '100%',
            boxSizing: 'border-box'
        }}>
            <div style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#333'
            }}>
                My Web3 App
            </div>
            <ConnectButton />
        </div>);
}