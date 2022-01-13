import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export default function Logo(): JSX.Element {
  return (
    <>
      <Link to="/">
        <img src={logo} style={{ width: '100%', height: '15vh' }} />
      </Link>
    </>
  );
}
