import React from 'react';
import './Scanner.css';
import BarcodeScanner from '../components/Scanner/BarcodeScanner';
import { Link } from 'react-router-dom';
import { LogoHeadingPage } from '../components/HeadingPageLayouts';

function NavButton({
  to,
  border,
  content,
}: {
  to: string;
  border: boolean;
  content: JSX.Element | string;
}): JSX.Element {
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
        borderRight: border ? '2.5px solid white' : '',
        borderTop: '5px solid white',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Open Sans Condensed',
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
        <div
          style={{
            position: 'fixed',
            height: '100%',
            width: '100%',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <BarcodeScanner />
        </div>
        <div
          style={{
            position: 'fixed',
            height: '10vh',
            width: '100%',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            top: '90%',
          }}
        >
          <NavButton to="/search" border={true} content="Tests durchsuchen" />
          <NavButton to="/about" border={false} content="Über" />
        </div>
      </LogoHeadingPage>
    </>
  );
}
