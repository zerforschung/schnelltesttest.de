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
          height: '10%',
          zIndex: 10,
          backgroundColor: 'white',
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ position: 'relative', height: '70%', width: '100%', textAlign: 'center' }}>
          <img src={logo} style={{ height: '100%' }} />
        </div>
      </Link>
      <div
        style={{
          paddingTop: '10vh',
        }}
      />
    </>
  );
}
