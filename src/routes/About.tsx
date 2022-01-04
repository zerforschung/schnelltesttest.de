import React from 'react';
import './Scanner.css';
import zerlogo from '../components/About/ZER_Logo_header.svg';
import { TextHeader } from '../components/TextHeader';
import { BigBackButton } from '../components/Buttons';

export default function About(): JSX.Element {
  return (
    <>
      {' '}
      <TextHeader text={'Über'} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          alignItems: 'center',
          minHeight: '90%'
        }}
      >
        <p style={{flexGrow: 0}}>schnelltesttest.de ist ein Projekt von</p>
        <a href="https://zerforschung.org" style={{flexGrow: 0}}>
          <img style={{ width: '100%' }} src={zerlogo} />
        </a>
        <div style={{flexGrow: 1}}></div>
        <BigBackButton style={{position: "relative", "bottom": "0", flexGrow: 0}} content={"Zurück"}/>
      </div>
    </>
  );
}
