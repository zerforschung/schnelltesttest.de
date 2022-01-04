import React from 'react';
import './Scanner.css';
import zerlogo from '../components/About/ZER_Logo_header.svg';
import TextHeadingPage from '../components/TextHeadingPage';

export default function About(): JSX.Element {
  return (
    <TextHeadingPage heading={"Über"}>
        <p>schnelltesttest.de ist ein Projekt von</p>
        <a href="https://zerforschung.org">
          <img style={{ width: '100%' }} src={zerlogo} />
        </a>
        <div style={{flexGrow: 1}}></div>
    </TextHeadingPage>
  );
}
