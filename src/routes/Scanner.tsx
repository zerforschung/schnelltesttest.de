import React from 'react';
import { HowToOverlay } from '../components/Scanner/HowToOverlay';
import './Scanner.css';
import BarcodeScanner from '../components/Scanner/BarcodeScanner';
import { Link } from 'react-router-dom';
import LogoHeadingPage from '../components/LogoHeadingPage';

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
      <LogoHeadingPage>
        <HowToOverlay />
        <BarcodeScanner />
        <div
          style={{
            position: 'fixed',
            height: '10%',
            width: '100%',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            top: '90%',
          }}
        >
          <NavButton to="/enter_code" content="Code eingeben" />
          <NavButton to="/about" content="Über" />
        </div>
      </LogoHeadingPage>
    </>
  );
}
