import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Header() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem 2rem',
            backgroundColor: '#f8f9fa',
            borderBottom: '1px solid #e0e0e0',
            width: '100%',
            boxSizing: 'border-box'
        }}>
            <ConnectButton />
        </div>);
}