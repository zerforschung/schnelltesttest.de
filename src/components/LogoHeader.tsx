import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export default function LogoHeader(): JSX.Element {
  return (
    <>
      <Link
        to="/"
        style={{
          width: '100%',
          maxHeight: '10vh',
          zIndex: 10,
          backgroundColor: 'white',
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
          marginBottom: '1em',
        }}
      >
        <div style={{ position: 'relative', height: '70%', width: '100%', textAlign: 'center' }}>
          <img src={logo} style={{ height: '100%' }} />
        </div>
      </Link>
    </>
  );
}
