import React from 'react';
import { HowToOverlay } from '../components/Scanner/HowToOverlay';
import './Scanner.css';
import BarcodeScanner from '../components/Scanner/BarcodeScanner';
import { Link } from 'react-router-dom';
import LogoHeader from '../components/LogoHeader';

function NavButton({ to, content }: { to: string; content: JSX.Element | string }): JSX.Element {
  return (
    <Link
      to={to}
      style={{
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
        backgroundColor: 'black',
        height: '100%',
        width: '50%',
        borderRight: '2.5px solid white',
        borderTop: '5px solid white',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {content}
    </Link>
  );
}
export default function Scanner(): JSX.Element {
  return (
    <>
      <LogoHeader
      />
      <div style={{ position: 'relative', height: '80%', width: '100%' }}>
        <HowToOverlay />
        <BarcodeScanner />
      </div>
      <div
        style={{
          position: 'relative',
          height: '10%',
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <NavButton to="/enter_code" content="Code eingeben" />
        <NavButton to="/about" content="Über" />
      </div>
    </>
  );
}
