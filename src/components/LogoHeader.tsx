import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export default function LogoHeader(): JSX.Element {
  return (
    <>
      <Link to="/" style={{width: '100%', height: '100%'}}>
        <div style={{ position: 'relative', height: '10%', width: '100%', textAlign: 'center' }}>
          <img src={logo} style={{ height: '100%' }} />
        </div>
      </Link>
    </>
  );
}
